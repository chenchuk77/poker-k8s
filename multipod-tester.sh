#!/bin/bash

MY_CARDS=Kc8c
OP_CARDS=AdQs
SAMPLES=100000

# this demonstrate multiple client requests which serverd from
# a different pods (behind an svc k8s object)

for i in $(seq 5); do
  echo -n "with ${SAMPLES} samples, ${MY_CARDS} vs ${OP_CARDS} "
  curl -s -X GET \
       $(minikube ip):32000/${MY_CARDS}${OP_CARDS}/${SAMPLES} | \
       jq -r '. | "wins about \(.win_percent | floor)%     [server from: \(.server_id)]"'
done

