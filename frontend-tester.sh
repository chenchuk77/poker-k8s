#!/bin/bash

FRONTEND_NODEPORT=32100

# this request GET only index.php (to check connection)
echo "fetching index.php..."; sleep 1s
curl -s -X GET \
	http://$(minikube ip):${FRONTEND_NODEPORT}/index.php |\
             grep PHP |\
	     sed -e 's/<[^>]*>//g' |\
	     grep -o PHP.\* || echo "frontend service unavailable."

# this request POST a real frontend request to be processed by backend
echo "checking real evaluation request..."; sleep 1s
curl -s -X POST \
	-H "Content-Type: application/x-www-form-urlencoded" \
	-d "cards_string=Qc8c9dTs&samples=100" \
	http://$(minikube ip):${FRONTEND_NODEPORT}/index.php |\
	     grep -o '<div id="php_data".*>' |\
	     cut -d ">" -f2 |\
	     cut -d "." -f1 || echo "backend service unavailable."

# k8s check backend being used
for x in $(seq 30); do
  BACKEND_HOSTNAME=$(curl -s -X POST \
                        -H "Content-Type: application/x-www-form-urlencoded" \
                        -d "cards_string=Qc8c9dTs&samples=100" \
                        http://$(minikube ip):${FRONTEND_NODEPORT}/index.php |\
                             grep -o 'server_id.*' | cut -d '"' -f3 || echo "Unknown")
  echo "request #${x} served by backend: ${BACKEND_HOSTNAME}."
done


