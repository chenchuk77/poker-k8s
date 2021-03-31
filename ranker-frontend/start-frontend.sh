#!/bin/bash


CONTAINER_NAME=ranker-frontend

docker stop $CONTAINER_NAME || true
docker rm   $CONTAINER_NAME || true


	 #  -d \
docker run \
	   -p 8090:80 \
	   -v $(readlink -f html):/usr/share/nginx/html \
	   --name $CONTAINER_NAME \
	   chenchuk77/$CONTAINER_NAME:1.0
