from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[2]
RUNTIME_NGINX_CONF = (REPO_ROOT / "nginx" / "nginx.conf").read_text()
DEPLOY_NGINX_CONF = (REPO_ROOT / "deploy" / "nginx.conf").read_text()
DOCKER_COMPOSE = (REPO_ROOT / "docker-compose.yml").read_text()
README = (REPO_ROOT / "README.md").read_text()


def _assert_probe_safe_health_routing(conf: str, upstream_var: str, *, has_spa_fallback: bool) -> None:
    assert "location = /health {" in conf
    assert f"proxy_pass ${upstream_var}_health_upstream;" in conf
    assert "location = /health/ready {" in conf
    assert f"proxy_pass ${upstream_var}_health_ready_upstream;" in conf
    assert "listen       443 ssl;" in conf
    if has_spa_fallback:
        assert "try_files $uri $uri/ /index.html;" in conf


def test_runtime_nginx_health_routes_bypass_spa_fallback():
    _assert_probe_safe_health_routing(RUNTIME_NGINX_CONF, "api", has_spa_fallback=True)


def test_deploy_nginx_health_routes_bypass_spa_fallback():
    _assert_probe_safe_health_routing(DEPLOY_NGINX_CONF, "api", has_spa_fallback=True)


def test_compose_exposes_http_and_https():
    assert '"80:80"' in DOCKER_COMPOSE
    assert '"443:443"' in DOCKER_COMPOSE


def test_readme_documents_canonical_health_contract_and_local_https_stack():
    assert "http://localhost/api/v1/health" in README
    assert "http://localhost/api/v1/health/ready" in README
    assert "https://localhost" in README
    assert "self-signed development certificate" in README
