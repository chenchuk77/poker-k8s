FROM node:14
MAINTAINER chenchuk@gmail.com
WORKDIR /usr/src/app
COPY . .

EXPOSE 3000
CMD ["node", "bin/ranker-webserver.js"]

### use this for debug container app issues
#CMD [ "/bin/sleep", "100m" ]
