FROM nginx:1.16.1-alpine

WORKDIR /etc/nginx

RUN rm -rf /etc/nginx/conf.d

COPY ./service.conf /etc/nginx/conf.d

CMD [ "nginx", "-g", "daemon off;" ]