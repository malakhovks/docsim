FROM python:3.8-slim

LABEL maintainer "Kyrylo Malakhov <malakhovks@nas.gov.ua> and Oleksandr Shchurov <alexandershchurov@gmail.com>"
LABEL description "DOCSIM - tools for knowledge discovery, classification, diagnostics and prediction."

COPY . /docsim/
WORKDIR /docsim/server/

RUN apt-get -y clean \
    && apt-get -y update \
    && apt-get -y install nginx \
    && apt-get -y install python-dev \
    && apt-get -y install build-essential \
    && apt-get -y install unzip \
    && apt-get -y install bzip2 \
    && apt-get -y install wget \
    && apt-get -y install curl \
    && curl https://getmic.ro | bash \
    # ------------------------------------------------------------------
    && pip install -r ./deploy/requirements.txt --src /usr/local/src \
    # Download models
    && wget -O ./models/fiction.lowercased.lemmatized.word2vec.300d.bz2 https://lang.org.ua/static/downloads/models/fiction.lowercased.lemmatized.word2vec.300d.bz2 \
    && bzip2 -d ./models/fiction.lowercased.lemmatized.word2vec.300d.bz2 \
    # ------------------------------------------------------------------
    # && mkdir -p /usr/share/man/man1 \
    # && apt-get -y install openjdk-11-jdk-headless \
    && rm -r /root/.cache \
    && apt-get -y clean \
    && apt-get -y autoremove

# WORKDIR /docsim/server/deploy
COPY /docsim/server/deploy/nginx.conf /etc/nginx
WORKDIR /docsim/server
RUN chmod +x ./start.sh
CMD ["./start.sh"]

# COPY ./deploy/nginx.conf /etc/nginx
# RUN chmod +x ./start.sh
# CMD ["./start.sh"]