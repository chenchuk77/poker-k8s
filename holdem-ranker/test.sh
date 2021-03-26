#!/bin/bash
curl -X GET localhost:3000/As2hAd5d/$1 | jq .
# time curl -s -X GET localhost:3000/AsAd7c8c/1000000 | jq '.win_percent'
