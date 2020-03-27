FROM nginx:1.17.9-alpine

WORKDIR /etc/nginx

RUN rm -r /etc/nginx/conf.d/*

COPY . /etc/nginx/conf.d

CMD [ "nginx", "-g", "daemon off;" ]