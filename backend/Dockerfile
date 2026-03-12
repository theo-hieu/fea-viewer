FROM python:3.12-slim AS base

WORKDIR /app

# Install system dependencies (needed for compilation of some python packages if any)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Install the runtime app itself
RUN pip install -e .

# The runtime image is used by the API and worker services.
FROM base AS runtime

# The test image layers dev dependencies on top of the runtime install.
FROM base AS test
RUN pip install -e .[dev]

# The CMD is overridden by docker-compose.yml, but we provide a default
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
