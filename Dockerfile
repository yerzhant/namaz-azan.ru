FROM node:26-slim AS builder
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY . .
RUN npm audit
RUN npm run lint
RUN npm run build

FROM nginx:1.31-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /namaz
COPY --from=builder /app/dist .
