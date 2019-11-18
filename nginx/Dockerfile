FROM nginx:1.16.1-alpine

WORKDIR /etc/nginx

COPY ./conf.d /etc/nginx/

CMD [ "nginx", "-g", "daemon off;" ]