import io
import logging
from typing import Optional

import boto3
from botocore.client import Config
from botocore.exceptions import ClientError

from app.config import settings
from app.api.v1.routes_models import ApiObjectStore

logger = logging.getLogger(__name__)

class S3Client(ApiObjectStore):
    """
    Concrete implementation of ApiObjectStore using boto3 to interface with MinIO/S3.
    """
    def __init__(self):
        self.endpoint_url = settings.S3_ENDPOINT
        self.bucket = settings.S3_BUCKET
        self.access_key = settings.S3_ACCESS_KEY
        self.secret_key = settings.S3_SECRET_KEY
        
        self.client = boto3.client(
            "s3",
            endpoint_url=self.endpoint_url,
            aws_access_key_id=self.access_key,
            aws_secret_access_key=self.secret_key,
            config=Config(signature_version="s3v4"),
            region_name="us-east-1"  # Required for boto3 even with MinIO
        )
        
        self._ensure_bucket_exists()

    def _ensure_bucket_exists(self) -> None:
        """Create the configured bucket if it doesn't already exist."""
        try:
            self.client.head_bucket(Bucket=self.bucket)
        except ClientError as e:
            error_code = e.response.get("Error", {}).get("Code")
            if error_code == "404":
                logger.info(f"Bucket '{self.bucket}' does not exist. Creating it...")
                self.client.create_bucket(Bucket=self.bucket)
            else:
                logger.error(f"Failed to check/create bucket '{self.bucket}': {e}")
                raise

    def put_object(self, key: str, data: bytes) -> None:
        """Upload raw bytes to S3."""
        try:
            self.client.put_object(
                Bucket=self.bucket,
                Key=key,
                Body=data
            )
        except ClientError as e:
            logger.error(f"Failed to put object {key}: {e}")
            raise

    def get_object_stream(self, key: str) -> Optional[bytes]:
        """Download raw bytes from S3. Simulates a stream for MVP."""
        try:
            response = self.client.get_object(Bucket=self.bucket, Key=key)
            # For MVP, we load into memory. Phase 2 should use Response Streaming
            return response["Body"].read()
        except ClientError as e:
            error_code = e.response.get("Error", {}).get("Code")
            if error_code == "NoSuchKey":
                return None
            logger.error(f"Failed to get object {key}: {e}")
            raise

    def delete_prefix(self, prefix: str) -> None:
        """Delete all objects matching a given prefix (folder)."""
        try:
            paginator = self.client.get_paginator('list_objects_v2')
            pages = paginator.paginate(Bucket=self.bucket, Prefix=prefix)

            objects_to_delete = []
            for page in pages:
                if 'Contents' in page:
                    for obj in page['Contents']:
                        objects_to_delete.append({'Key': obj['Key']})

            if objects_to_delete:
                # DeleteObjects accepts max 1000 keys at a time
                for i in range(0, len(objects_to_delete), 1000):
                    batch = objects_to_delete[i:i + 1000]
                    self.client.delete_objects(
                        Bucket=self.bucket,
                        Delete={'Objects': batch}
                    )
        except ClientError as e:
            logger.error(f"Failed to delete prefix {prefix}: {e}")
            raise
