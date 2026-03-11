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
    - **MinIO Console (Storage):** [http://localhost:9001](http://localhost:9001) (User: `minioadmin`, Pass: `minioadmin`)
    - **API Health:** [http://localhost:8000/health](http://localhost:8000/health)

---

## 🛠️ Local Development Setup

If you want to run the frontend and backend separately for faster development.

### 1. Backend (FastAPI + Celery)
You will still need Redis, Postgres, and MinIO running (you can use `docker compose up postgres redis minio -d` for just the infrastructure).

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Create a virtual environment and install dependencies:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    pip install -e .
    ```
3.  **Run the API server:**
    ```bash
    uvicorn app.main:app --reload --port 8000
    ```
4.  **Run the Celery worker (in a separate terminal):**
    ```bash
    celery -A app.tasks.parse_task worker --loglevel=info
    ```

### 2. Frontend (Vite + React + Three.js)
1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
4.  **Open the browser:** [http://localhost:5173](http://localhost:5173)

---

## 🧪 Testing

### Backend
```bash
cd backend
pytest
```

### Frontend
```bash
cd frontend
npm test          # Unit tests (Vitest)
npx playwright test  # E2E tests
```

---

## 🏗️ Architecture
- **Frontend:** React, Zustand (State), Three.js (Rendering), Vite.
- **Backend:** FastAPI, Celery (Async Parsing), SQLAlchemy, Meshio/VTK.
- **Infrastructure:** PostgreSQL, Redis, MinIO (S3), Nginx.
