#!/bin/bash

# login to a tester container
# $ k exec -ti network-multitool /bin/bash

# this should work (from tester container inside the k8s cluster)
# $ mysql -h${MYSQL_SERVICE_HOST} -uroot -ppassword -e "show databases;"

# NOTE: if service created AFTER the tested pod
# $ k replace --force -f ../network-multitool.yml
