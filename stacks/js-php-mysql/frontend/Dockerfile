FROM node:23-alpine AS base

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

FROM base AS development
CMD ["npm", "run", "dev"]

FROM base AS production
RUN npm run build

FROM nginx:alpine AS production-deploy
COPY --from=production /app/frontend/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
