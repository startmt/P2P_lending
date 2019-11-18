FROM nginx:1.16.1-alpine

WORKDIR /etc/nginx

COPY ./service.conf /etc/nginx/conf.d

CMD [ "nginx", "-g", "daemon off;" ]