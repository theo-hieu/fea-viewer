from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    # Base configuration
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "FEA Viewer"

    # Database
    DATABASE_URL: str = "postgresql://fea:fea@postgres:5432/feaviewer"

    # Redis/Celery
    REDIS_URL: str = "redis://redis:6379/0"
    PARSE_SUBPROCESS_TIMEOUT_SECONDS: int = 300

    # S3 / MinIO Configuration
    S3_ENDPOINT: str = "http://minio:9000"
    S3_BUCKET: str = "fea-models"
    S3_ACCESS_KEY: str = "minioadmin"
    S3_SECRET_KEY: str = "minioadmin"

    model_config = SettingsConfigDict(
        env_file=".env", 
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore"
    )

settings = Settings()
