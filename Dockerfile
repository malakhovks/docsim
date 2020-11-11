FROM python:3.8-slim

LABEL maintainer "Kyrylo Malakhov <malakhovks@nas.gov.ua> and Vitalii Velychko <aduisukr@gmail.com>"
LABEL description "DOCSIM - tools for knowledge discovery, classification, diagnostics and prediction."

COPY . /docsim/srvr
WORKDIR /docsim/srvr

RUN apt-get -y clean \
    && apt-get -y update \
    && apt-get -y install nginx \
    && apt-get -y install python-dev \
    && apt-get -y install build-essential \
    && apt-get -y install unzip \
    && apt-get -y install curl \
    && curl https://getmic.ro | bash \
    # ------------------------------------------------------------------
    && pip install -r ./deploy/requirements.txt --src /usr/local/src \
    # && mkdir -p /usr/share/man/man1 \
    # && apt-get -y install openjdk-11-jdk-headless \
    && rm -r /root/.cache \
    && apt-get -y clean \
    && apt-get -y autoremove

COPY ./deploy/nginx.conf /etc/nginx
RUN chmod +x ./start.sh
CMD ["./start.sh"]
