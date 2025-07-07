FROM php:8.4-alpine AS backend-php-alpine

WORKDIR /app

COPY ./src /app

CMD ["php", "-S", "0.0.0.0:8000", "-t", "/app"]