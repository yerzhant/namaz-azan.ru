FROM node:23-slim AS builder
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY . .
RUN npm audit
# RUN npm run lint CPU goes up to 100% and not exiting
RUN npm run build

FROM nginx:1.28-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /namaz
COPY --from=builder dist .
