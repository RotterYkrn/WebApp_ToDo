FROM php:8.4-alpine AS backend-php-alpine

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY composer.json composer.lock ./

RUN composer install

COPY ./src /var/www/html/src

CMD ["php", "-S", "0.0.0.0:9000", "-t", "/var/www/html/src"]


FROM php:8.4-fpm AS backend-php-fpm

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

CMD ["php-fpm"]
