# syntax=docker/dockerfile:1

FROM node:latest

# set version label
ARG BUILD_DATE
ARG VERSION
ARG SITE_RELEASE
LABEL build_version="portfolio version:- ${VERSION} Build-date:- ${BUILD_DATE}"
LABEL maintainer="RileyWilkes"

RUN \
  echo "**** install build packages ****" && \
  apk add --no-cache --virtual=build-dependencies \
    git \
    yarn && \
  echo "**** install website ****" && \
  mkdir -p /app/www && \
  if [ -z ${SITE_RELEASE+x} ]; then \
    SITE_RELEASE=$(curl -sX GET "https://api.github.com/repos/dinocopterrileysaur/portfolio/releases/latest" \
    | awk '/tag_name/{print $4;exit}' FS='[""]'); \
  fi && \
  curl -o \
    /tmp/portfolio.tar.gz -L \
    "https://github.com/dinocopterrileysaur/portfolio/archive/${SITE_RELEASE}.tar.gz" && \
  tar xf \
    /tmp/portfolio.tar.gz -C \
    /app/www/ --strip-components=1 && \
  cp -R /app/www/data/plugins \
    /defaults/plugins && \
  echo "**** install composer packages ****" && \
  composer install -d /app/www --no-dev && \
  echo "**** install yarn packages ****" && \
  cd /app/www && \
  yarn --production && \
  yarn cache clean && \
  mv /app/www/public/node_modules /defaults/node_modules && \
  echo "**** cleanup ****" && \
  apk del --purge \
    build-dependencies && \
  rm -rf \
    /tmp/* \
    $HOME/.cache \
    $HOME/.composer

# copy local files
COPY root/ /

# ports and volumes
EXPOSE 80 443
VOLUME /config