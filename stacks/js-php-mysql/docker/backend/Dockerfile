FROM php:8.4-alpine AS backend-php-alpine

WORKDIR /app

CMD ["php", "-S", "0.0.0.0:8000", "-t", "/app"]


FROM php:8.4-fpm AS backend-php-fpm

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

CMD ["php-fpm"]
