# FROM base이미지 설정
FROM python:3.12

# LABEL 작성자 정보
LABEL authors="yejin99"

# ENV 환경변수
# - PYTHONDONTWRITEBYTECODE .pyc 파이썬바이트코드 생성방지
ENV PYTHONDONTWRITEBYTECODE=1
# - PYTHONUNBUFFERED 파이썬 콘솔 출력 버퍼링 하지 않음
ENV PYTHONUNBUFFERED=1

# WORKDIR 작업디렉토리
WORKDIR /app

# python 의존패키지설정
# COPY hostDir -> containerDir
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# 프로젝트 파일 복사
COPY . .


# CMD로 직접 실행 명령어 작성
CMD ["gunicorn", "-w", "3", "-b", ":8000", "tajo.wsgi:application"]


# EXPOSE 컨테이너외부로 노출 포트
EXPOSE 8000
