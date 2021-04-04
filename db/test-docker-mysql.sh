#!/bin/bash

echo "this test mysql in a local docker container (not k8s)..."
sleep 2s
mysql -P3001 -uroot -ppassword -h127.0.0.1 -e "show databases; select * from ranker.requests limit 5;"
