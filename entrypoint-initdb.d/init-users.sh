#!/bin/bash
mongoimport \
    --db app \
    --collection users \
    --file /docker-entrypoint-initdb.d/users.json \
    --jsonArray

touch /tmp/init.done
