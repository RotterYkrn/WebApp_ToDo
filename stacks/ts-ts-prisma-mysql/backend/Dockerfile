FROM node:23-alpine

WORKDIR /app

COPY package*.json .
COPY backend/package.json backend/

RUN npm install

WORKDIR /app/backend

CMD ["npm", "run", "dev"]
