FROM python:3.12

LABEL authors="yejin99"
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

# --- [여기서부터 추가!] ---
# 1. nginx 설치 (apt)
RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*

# 2. nginx.conf를 컨테이너에 복사 (프로젝트 루트에 nginx.conf 파일 만들어놔야 함)
COPY nginx.conf /etc/nginx/nginx.conf

# 3. staticfiles 디렉토리도 컨테이너에 복사된 상태여야 함 (collectstatic 하면 ok)
# 필요시 아래 추가
# RUN python manage.py collectstatic --noinput

# 4. 포트 노출 (nginx 기본 80포트 사용)
EXPOSE 80

# 5. nginx & gunicorn을 동시에 실행하는 sh 스크립트 준비 (entrypoint.sh)
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# 6. 컨테이너 실행 시 entrypoint.sh 실행
CMD ["/entrypoint.sh"]
