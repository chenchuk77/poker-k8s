#!/bin/bash
mysql -P3001 -uroot -ppassword -h127.0.0.1 -e "show databases; select * from ranker.requests limit 5;"
