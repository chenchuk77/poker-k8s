#!/bin/bash

REPO=chenchuk77
CONTAINER_NAME=ranker-frontend
TAG=1.2

echo "building ${CONTAINER_NAME}:{TAG}"
#docker build -t chenchuk77/ranker-frontend:1.2 .
docker build -t ${REPO}/${CONTAINER_NAME}:${TAG} .

if [[ "$1" = "--push" ]]; then
  echo "pushing to dockerhub..."
  # push to dockerhub:
  # docker push chenchuk77/ranker-frontend:1.2
  docker push ${REPO}/${CONTAINER_NAME}:${TAG}
fi

