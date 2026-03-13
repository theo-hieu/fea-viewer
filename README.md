# FEA Viewer

A high-performance web-based viewer for Finite Element Analysis (FEA) results, featuring scalar contours, deformation, and GPU picking.

## 🚀 Quick Start (Docker Compose)

The easiest way to run the entire stack (Frontend, Backend, Database, Cache, Storage) is using Docker Compose.

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Run the Stack
1.  **Clone the repository.**
2.  **Build and start the services:**
    ```bash
    docker compose up --build
    ```
3.  **Access the application:**
    - **Frontend:** [http://localhost](http://localhost)
    - **API Health (liveness):** [http://localhost/api/v1/health](http://localhost/api/v1/health)
    - **API Health (readiness):** [http://localhost/api/v1/health/ready](http://localhost/api/v1/health/ready)
    - **MinIO Console (Storage):** [http://localhost:9001](http://localhost:9001) (User: `minioadmin`, Pass: `minioadmin`)

The Docker Compose nginx service listens on `80` only. HTTPS is not exposed in
this local stack. For ingress/container probes, nginx also proxies `/health`
and `/health/ready` to the canonical API health endpoints above.

---

## 🛠️ Backend Infrastructure

The project uses a modern asynchronous stack for high-performance mesh processing:

- **PostgreSQL**: Metadata and job status storage.
- **MinIO (S3)**: Distributed object storage for large FEA result files.
- **Redis**: Message broker and result backend for Celery.
- **Celery**: Background worker for long-running FEA parsing tasks.
- **Alembic**: Database schema migration management.

### Database Migrations
Migrations are applied automatically during container startup. To manage migrations manually:
```bash
# Generate a new migration inside the container
docker compose exec api alembic revision --autogenerate -m "description"

# Apply migrations
docker compose exec api alembic upgrade head
```

---

## 🎨 Local Development Setup

### 1. Backend (FastAPI + Celery)
The backend is mounted as a volume in Docker Compose (`./backend:/app`), so changes to the code will automatically trigger a reload (via Uvicorn) or can be applied by restarting the worker.

If running **without** Docker:
1.  Set up local Postgres, Redis, and MinIO.
2.  Update `backend/app/config.py` to point to `localhost` instead of docker service names.
3.  Install dependencies:
    ```bash
    cd backend
    pip install -e .[dev]
    ```

For parity with the Docker image, `pip install -r requirements.txt` is also valid.
The editable install now includes the backend runtime dependencies needed to
import task modules and run the pytest suite locally.

### 2. Frontend (Vite + React + Three.js)
1.  Navigate to the frontend directory: `cd frontend`
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run dev`
4.  Open [http://localhost:5173](http://localhost:5173)

---

## 🧪 Testing

### Backend (Pytest)
```bash
docker compose exec api pytest
```

Local backend test runs:
```bash
cd backend
pytest
```

Backend tests force temp artifacts into a dedicated writable temp root so
Windows temp-directory permission issues do not block the parser and task
suites.

Recommended parser crash-regression checks:
```bash
cd backend
pytest tests/tasks/test_parse_task.py tests/tasks/test_process_upload.py tests/parsing/test_vtu_error_handling.py -q
```

Recommended metadata regression checks:
```bash
cd backend
pytest tests/api/test_metadata_persistence.py tests/api/test_routes_models.py -q
```

```bash
cd frontend
npm test -- --run tests/unit/modelMetadataApi.test.ts
```

Recommended health contract regression checks:
```bash
cd backend
pytest tests/api/test_health_routes.py -q
```

```bash
# from the repository root
pytest tests/integration/test_health_contract.py -q
```

Recommended quality checks for the crash-safe parser path:
```bash
cd backend
python -m ruff check app/parsing/parse_subprocess_runner.py app/tasks/task_failure_handler.py app/tasks/parse_task.py tests/tasks/test_parse_task.py tests/tasks/test_process_upload.py tests/parsing/test_vtu_error_handling.py
python -m mypy app/parsing/parse_subprocess_runner.py app/tasks/task_failure_handler.py app/tasks/parse_task.py tests/tasks/test_parse_task.py tests/tasks/test_process_upload.py tests/parsing/test_vtu_error_handling.py
```

Alternative: run tests in the dedicated backend test image:
```bash
docker build --target test -t fea-viewer-backend:test ./backend
docker run --rm -v "$PWD/backend:/app" -w /app fea-viewer-backend:test pytest tests -q
```
### Frontend (Vitest & Playwright)
```bash
cd frontend
npm test          # Unit tests
npx playwright test  # E2E tests
```

### CI Commands
Frontend:
```bash
cd frontend
npm run lint
npm run typecheck
npm test
npm run build
```

Backend:
```bash
cd backend
python -m ruff check app/api/v1/routes_models.py app/main.py app/models/db.py app/parsing/models.py app/parsing/vtk_parser.py app/parsing/parse_subprocess_runner.py app/tasks/task_failure_handler.py app/tasks/parse_task.py tests/api/test_health_routes.py tests/api/test_metadata_persistence.py tests/api/test_routes_models.py tests/tasks/test_parse_task.py tests/tasks/test_process_upload.py tests/parsing/test_vtu_error_handling.py
python -m mypy app/api/v1/routes_models.py app/main.py app/models/db.py app/parsing/models.py app/parsing/vtk_parser.py app/parsing/parse_subprocess_runner.py app/tasks/task_failure_handler.py app/tasks/parse_task.py tests/api/test_health_routes.py tests/api/test_metadata_persistence.py tests/api/test_routes_models.py tests/tasks/test_parse_task.py tests/tasks/test_process_upload.py tests/parsing/test_vtu_error_handling.py
pytest tests -q
```

For GitHub branch protection, mark these jobs as required checks before merge:
- `Backend Quality`
- `Frontend Quality`
- `Security Audit`

---

## 🏗️ Architecture
- **Frontend:** React, Zustand, Three.js, Vite.
- **Backend:** FastAPI, Celery, SQLAlchemy (Sync for MVP), Meshio.
- **Infrastructure:** PostgreSQL 16, Redis 7, MinIO, Nginx 1.25.
