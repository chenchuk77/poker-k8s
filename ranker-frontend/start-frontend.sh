#!/bin/bash

CONTAINER_NAME=ranker-frontend

echo "rebuilding the ${CONTAINER_NAME} image ..."
./rebuild.sh

echo "starting ${CONTAINER_NAME} container ..."

docker stop $CONTAINER_NAME || true
docker rm   $CONTAINER_NAME || true

# mount volumes makes easy development (can change files inside container and refresh browser)
#docker run -d \
#	   -p 8090:80 \
#	   -v $(readlink -f html):/usr/share/nginx/html \
#	   --name $CONTAINER_NAME \
#	   chenchuk77/$CONTAINER_NAME:1.0

# use when html directory injected via Dockerfile
docker run -d \
           -p 8090:80 \
           --name $CONTAINER_NAME \
           chenchuk77/$CONTAINER_NAME:1.0

