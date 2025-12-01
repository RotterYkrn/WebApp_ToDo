FROM node:25-alpine AS base

WORKDIR /app

COPY package*.json .
COPY ./shared /app/shared
COPY frontend/package.json frontend/

RUN npm install

# WORKDIR /app/shared
# RUN npm link

WORKDIR /app/frontend

FROM base AS development
CMD ["npm", "run", "dev"]

FROM base AS builder
RUN npm run build

FROM nginx:alpine AS deploy
COPY --from=builder /app/frontend/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
