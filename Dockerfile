FROM node:lts-buster AS compile-image

COPY ./ui /app/ui

WORKDIR /app/ui
RUN npm install \
    && npm run build \
    && rm -r ./node_modules

FROM python:3.8-slim

LABEL maintainer "Kyrylo Malakhov <malakhovks@nas.gov.ua> and Vitalii Velychko <aduisukr@gmail.com> and Oleksandr Shchurov <alexandershchurov@gmail.com>"
LABEL description "docsim - An NLU-Powered tool for knowledge discovery, classification, diagnostics and prediction."

COPY ./server /docsim/server
WORKDIR /docsim/server/
COPY --from=compile-image /app/ui/dist/* /docsim/server/static/
COPY --from=compile-image /app/ui/dist/index.html /docsim/server/templates

RUN apt-get -y clean \
    && apt-get -y update \
    && apt-get -y install nginx \
    && apt-get -y install python-dev \
    && apt-get -y install build-essential \
    && apt-get -y install unzip \
    && apt-get -y install bzip2 \
    && apt-get -y install wget \
    && apt-get -y install curl \
    # ------------------------------------------------------------------
    && pip install -r ./deploy/requirements.txt --src /usr/local/src \
    # Download fiction model as a default
    && wget -O ./models/fiction.lowercased.lemmatized.word2vec.300d.bz2 https://lang.org.ua/static/downloads/models/fiction.lowercased.lemmatized.word2vec.300d.bz2 \
    && bzip2 -d ./models/fiction.lowercased.lemmatized.word2vec.300d.bz2 \
    && rm -r /root/.cache \
    && apt-get -y clean \
    && apt-get -y autoremove \
    && cp ./deploy/nginx.conf /etc/nginx

RUN chmod +x ./start.sh
CMD ["./start.sh"]