FROM nginx
MAINTAINER chenchuk@gmail.com
WORKDIR /usr/share/nginx

COPY ./html ./html
RUN apt-get update && \
    apt-get install -y nodejs npm vim && \
    npm install pixi.js && \
    npm install pixi-svg --save

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

### use this for debug container app issues
#CMD [ "/bin/sleep", "100m" ]
