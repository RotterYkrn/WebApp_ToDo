FROM node:25-alpine

WORKDIR /app

COPY package*.json .
COPY backend/package.json backend/
COPY shared/package.json shared/

RUN npm install

COPY ./shared /app/shared
WORKDIR /app/shared
RUN npm link

WORKDIR /app/backend

CMD ["npm", "run", "dev"]
