#!/bin/bash

echo "rebuilding the image ..."
./rebuild.sh

echo "starting container ..."
CONTAINER_NAME=ranker-frontend

docker stop $CONTAINER_NAME || true
docker rm   $CONTAINER_NAME || true


	 #  -d \
docker run -d \
	   -p 8090:80 \
	   -v $(readlink -f html):/usr/share/nginx/html \
	   --name $CONTAINER_NAME \
	   chenchuk77/$CONTAINER_NAME:1.0
