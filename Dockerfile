FROM nginx:1.19-alpine
WORKDIR /namaz
COPY dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf