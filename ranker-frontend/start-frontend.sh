#!/bin/bash

CONTAINER_NAME=ranker-frontend

echo "rebuilding the ${CONTAINER_NAME} image ..."
./rebuild.sh

echo "starting ${CONTAINER_NAME} container ..."

docker stop $CONTAINER_NAME || true
docker rm   $CONTAINER_NAME || true

# based on TrafeX/docker-php-nginx, ranker is accessible via docker0:3000 because its ranker is mapped to the host

# use for dev (mount instead of COPY, can change source files in runtime)
#docker run -d \
#          -p 8090:8080 \
#	  -e RANKER_ADDRESS=172.17.0.1 \
#	  -e RANKER_PORT=3000 \
#          -v $(readlink -f html):/var/www/html \
#          --name $CONTAINER_NAME \
#          chenchuk77/$CONTAINER_NAME:1.0



# use when html directory is 'baked' into the image via Dockerfile COPY
docker run -d \
           -p 8090:8080 \
	   -e RANKER_ADDRESS=172.17.0.1 \
	   -e RANKER_PORT=3000 \
           --name $CONTAINER_NAME \
           chenchuk77/$CONTAINER_NAME:1.0

