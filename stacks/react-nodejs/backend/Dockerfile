FROM node:25-alpine AS base

WORKDIR /app

COPY package*.json .
COPY ./shared /app/shared
COPY backend/package.json backend/

RUN npm install

# WORKDIR /app/shared
# RUN npm link

WORKDIR /app/backend

FROM base AS development
CMD ["npm", "run", "dev"]

FROM base AS builder
RUN npm run build

FROM node:25-alpine AS deploy
COPY --from=builder package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/backend/dist ./dist
CMD ["node", "dist/app.js"]
