#!/bin/bash

MY_CARDS=Kc8c
OP_CARDS=AdQs
SAMPLES=1000

WINS=$(curl -s -X GET $(minikube ip):32000/${MY_CARDS}${OP_CARDS}/${SAMPLES}| jq '.win_percent')

echo "${MY_CARDS} wins vs ${OP_CARDS} about %${WINS} after running ${SAMPLES} samples."
echo ""
