FROM node:23-alpine AS base

WORKDIR /app

COPY package*.json .
COPY frontend/package.json frontend/

RUN npm install

WORKDIR /app/frontend

FROM base AS development
CMD ["npm", "run", "dev"]

FROM base AS production
RUN npm run build

FROM nginx:alpine AS production-deploy
COPY --from=production /app/frontend/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
