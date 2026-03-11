from app.api.v1.routes_models import ApiParseQueue
from app.tasks.parse_task import process_upload

class CeleryParseQueue(ApiParseQueue):
    """
    Concrete implementation of ApiParseQueue that fires Celery tasks via Redis.
    """
    def enqueue_parse(self, model_id: str, raw_key: str) -> None:
        # We also need the filename, extracting from raw_key which looks like: uploads/{model_id}/raw/{filename}
        filename = raw_key.split("/")[-1]
        process_upload.delay(model_id, raw_key, filename)
