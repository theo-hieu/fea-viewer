import httpx
import pytest

# These integration tests assume `docker-compose up backend proxy` is running
# locally simulating the deployment. For unit tests, we check the actual nginx.conf
# parameters via Regex rather than executing the entire load balancer topology.

import re

def test_nginx_conf_client_max_body_size():
    with open("deploy/nginx.conf", "r") as f:
        conf = f.read()
    # 500m mandatory size limit from 03b.
    assert re.search(r"client_max_body_size\s+500m;", conf), "Max body size must be exactly 500m"

def test_nginx_conf_rate_limits():
    with open("deploy/nginx.conf", "r") as f:
        conf = f.read()

    # Upload zone bursts 10r/m
    assert re.search(r"limit_req_zone\s+\$binary_remote_addr\s+zone=upload:\d+m\s+rate=10r/m;", conf)
    assert re.search(r"limit_req\s+zone=upload\s+burst=10", conf)

    # API zone bursts 100r/m
    assert re.search(r"limit_req_zone\s+\$binary_remote_addr\s+zone=api:\d+m\s+rate=100r/m;", conf)
    assert re.search(r"limit_req\s+zone=api\s+burst=100", conf)

def test_nginx_conf_hsts_header():
    with open("deploy/nginx.conf", "r") as f:
        conf = f.read()
    # Explicit HSTS
    assert re.search(r'add_header\s+Strict-Transport-Security\s+"max-age=31536000;\s*includeSubDomains"\s*always;', conf)

def test_nginx_conf_csp_header():
    with open("deploy/nginx.conf", "r") as f:
        conf = f.read()
    # Explicit Content-Security-Policy
    assert re.search(r'add_header\s+Content-Security-Policy\s+"default-src\s*\'self\';\s*script-src\s*\'self\';\s*style-src\s*\'self\'\s*\'unsafe-inline\';\s*img-src\s*\'self\'\s*blob:;\s*connect-src\s*\'self\'\s*wss:;"\s*always;', conf)
