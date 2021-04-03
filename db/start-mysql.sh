#!/bin/bash

CONTAINER_NAME=ranker-mysql
TAG=1.1

echo "rebuilding the ${CONTAINER_NAME} image ..."
./rebuild.sh

echo "starting ${CONTAINER_NAME} container ..."

docker stop ${CONTAINER_NAME} || true
docker rm   ${CONTAINER_NAME} || true

# use when html directory is 'baked' into the image via Dockerfile COPY
docker run -d \
           -p 3001:3306 \
	   -e MYSQL_ROOT_PASSWORD=password \
           --name ${CONTAINER_NAME} \
           chenchuk77/${CONTAINER_NAME}:${TAG}

