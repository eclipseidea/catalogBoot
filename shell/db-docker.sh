#!/usr/bin/env bash

container_name="catalog"

docker stop ${container_name}

docker run --rm --name catalog \
    -e MYSQL_ROOT_PASSWORD=XWuiYdlj \
    -e MYSQL_DATABASE=catalog \
    -p 3306:3306 -d mysql