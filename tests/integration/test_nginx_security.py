import re
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[2]
RUNTIME_CONF = (REPO_ROOT / "nginx" / "nginx.conf").read_text()
DEPLOY_CONF = (REPO_ROOT / "deploy" / "nginx.conf").read_text()


def test_nginx_runtime_and_deploy_configs_are_kept_in_sync():
    assert DEPLOY_CONF == RUNTIME_CONF

def test_nginx_conf_client_max_body_size():
    assert re.search(r"client_max_body_size\s+500m;", RUNTIME_CONF), "Max body size must be exactly 500m"

def test_nginx_conf_rate_limits():
    assert re.search(r"limit_req_zone\s+\$binary_remote_addr\s+zone=upload:\d+m\s+rate=10r/m;", RUNTIME_CONF)
    assert re.search(r"limit_req\s+zone=upload\s+burst=10", RUNTIME_CONF)
    assert re.search(r"limit_req_zone\s+\$binary_remote_addr\s+zone=api:\d+m\s+rate=100r/m;", RUNTIME_CONF)
    assert re.search(r"limit_req\s+zone=api\s+burst=100", RUNTIME_CONF)

def test_nginx_conf_hsts_header():
    assert re.search(r'add_header\s+Strict-Transport-Security\s+"max-age=31536000;\s*includeSubDomains"\s*always;', RUNTIME_CONF)

def test_nginx_conf_csp_header():
    assert re.search(r'add_header\s+Content-Security-Policy\s+"default-src\s*\'self\';\s*script-src\s*\'self\';\s*style-src\s*\'self\'\s*\'unsafe-inline\';\s*img-src\s*\'self\'\s*blob:;\s*connect-src\s*\'self\'\s*ws:\s*wss:;"\s*always;', RUNTIME_CONF)


def test_nginx_conf_enables_tls_listener_and_local_certificates():
    assert "listen       443 ssl;" in RUNTIME_CONF
    assert "ssl_certificate     /etc/nginx/certs/localhost.crt;" in RUNTIME_CONF
    assert "ssl_certificate_key /etc/nginx/certs/localhost.key;" in RUNTIME_CONF
