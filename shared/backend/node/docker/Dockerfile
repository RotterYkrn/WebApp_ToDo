FROM node:23-alpine

WORKDIR /app

COPY package*.json .
COPY backend/package.json backend/

RUN npm install

WORKDIR /app/backend

COPY . .

CMD ["npm", "run", "dev"]
