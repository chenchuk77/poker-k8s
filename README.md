# This project is a demo for a k8s deployment

# components:

1. hand-evaluator: computation backend service
2. web-server: handling user requests

# services:

1. hand-evaluator
2. web-server



# deploy to kubernetes cluster
1. pods deployment
   kubectl create -f ranker-deploy.yml
2. service
   kubectl create -f ranker-nodeport.yml
3. test by using the tester. the tester run from outside the cluster and can access in via the nodeport service


