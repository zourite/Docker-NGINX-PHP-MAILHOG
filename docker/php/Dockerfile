FROM php:7.2-fpm-alpine

# Install necessary PHP extensions.
# Code comes from Wordpress official Docker image.
# See: https://github.com/docker-library/wordpress/blob/master/php7.2/fpm-alpine/Dockerfile
RUN set -ex; \  
    \
    apk add --no-cache --virtual .build-deps \
    libjpeg-turbo-dev \
    libpng-dev \
    ; \
    \
    docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr; \
    docker-php-ext-install gd mysqli opcache zip;