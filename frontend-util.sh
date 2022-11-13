#!/bin/bash

port=80
imageName=frontend-util
containerName=frontend-util-80

## 重新创建容器

# 停止容器
docker stop $containerName &&
# 删除容器
docker rm $containerName &&
# 删除镜像
docker rmi $imageName &&
# 重新构建镜像
docker build -t $imageName . &&
# 重新创建容器
docker run -d -p $port:80 --name $containerName $imageName