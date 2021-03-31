FROM nginx
MAINTAINER chenchuk@gmail.com
WORKDIR /usr/share/nginx
#COPY . .

RUN apt-get update && \
    apt-get install -y nodejs npm && \
    npm install pixi.js

#RUN npm install pixi.js
EXPOSE 80
#CMD ["node", "bin/example.js"]

### use this for debug container app issues
CMD [ "/bin/sleep", "100m" ]
