#!/bin/bash

REPO=chenchuk77
CONTAINER_NAME=ranker-frontend
TAG=1.5
OPTS="--no-cache"


echo "building ${CONTAINER_NAME}:${TAG}"
docker build ${OPTS} -t ${REPO}/${CONTAINER_NAME}:${TAG} .

if [[ "$1" = "--push" ]]; then
  echo "pushing to dockerhub..."
  # push to dockerhub:
  docker push ${REPO}/${CONTAINER_NAME}:${TAG}
fi

