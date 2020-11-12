FROM nginx:1.18
LABEL maintainer="NGINX Docker Maintainers <wangkai@irobotbox.com>"
#RUN rm /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html
#COPY ./ConfigFile/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80