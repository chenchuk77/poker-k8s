#!/bin/bash

REPO=chenchuk77
CONTAINER_NAME=ranker-mysql
TAG=1.1

echo "building ${CONTAINER_NAME}:{TAG}"
docker build -t ${REPO}/${CONTAINER_NAME}:${TAG} .

if [[ "$1" = "--push" ]]; then
  echo "pushing to dockerhub..."
  # push to dockerhub:
  docker push ${REPO}/${CONTAINER_NAME}:${TAG}
fi

