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
    - **API Health:** [http://localhost/api/v1/health](http://localhost/api/v1/health) (Proxied via Nginx)
    - **MinIO Console (Storage):** [http://localhost:9001](http://localhost:9001) (User: `minioadmin`, Pass: `minioadmin`)

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
    pip install -r requirements.txt
    pip install -e .
    ```

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

### Frontend (Vitest & Playwright)
```bash
cd frontend
npm test          # Unit tests
npx playwright test  # E2E tests
```

---

## 🏗️ Architecture
- **Frontend:** React, Zustand, Three.js, Vite.
- **Backend:** FastAPI, Celery, SQLAlchemy (Sync for MVP), Meshio.
- **Infrastructure:** PostgreSQL 16, Redis 7, MinIO, Nginx 1.25.
