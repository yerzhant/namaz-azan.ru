FROM node:16 as builder
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY . .
RUN npm audit
# RUN npm run lint
RUN npm run build

FROM nginx:1.19-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /namaz
COPY --from=builder dist .
