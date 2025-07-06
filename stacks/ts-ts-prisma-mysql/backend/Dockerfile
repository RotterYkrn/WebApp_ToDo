FROM webapp-todo-backend-node-base:latest

WORKDIR /app

COPY packages/shared-schema/package.json ./packages/shared-schema/
RUN npm install

COPY ./packages/shared-schema ./packages/shared-schema

WORKDIR /app/backend
