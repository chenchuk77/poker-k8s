#!/bin/bash


CONTAINER_NAME=holdem-ranker

docker stop $CONTAINER_NAME || true
docker rm   $CONTAINER_NAME || true

docker run -d \
	   -p 3000:3000 \
	   --name $CONTAINER_NAME \
	   chenchuk/holdem-ranker:1.0
