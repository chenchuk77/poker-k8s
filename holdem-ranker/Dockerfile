FROM node:14
MAINTAINER chenchuk@gmail.com
WORKDIR /usr/src/app
#COPY package*.json ./

#RUN npm install
# Bundle app source

# lib data bin

COPY . .

EXPOSE 3000

CMD [ "node", "bin/ranker-webserver.js"]

#CMD [ "/bin/sleep", "100m" ]
##docker run -p 49160:8080 -d <your username>/node-web-app
