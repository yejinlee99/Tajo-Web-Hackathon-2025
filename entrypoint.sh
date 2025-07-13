#!/bin/bash

# 1. Nginx 실행 (백그라운드)
service nginx start

# 2. Gunicorn 실행 (포그라운드, wsgi 경로 맞게!)
gunicorn tajo.wsgi:application --bind 0.0.0.0:8000

# 3. (선택) Nginx 로그 보기 원하면 아래도 추가 가능
# tail -f /var/log/nginx/access.log
