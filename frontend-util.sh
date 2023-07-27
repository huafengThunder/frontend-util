#!/bin/bash

port1=80
port2=443
imageName=frontend-util
containerName=frontend-util-80

## 重新创建容器

# 停止容器
docker stop ${containerName} &&
# 删除容器
docker rm ${containerName} &&
# 删除镜像
docker rmi ${imageName} &&
# 重新构建镜像
docker build -t ${imageName} . &&
# 重新创建容器,启动443和80端口映射
docker run -d -p ${port1}:80 -p ${port2}:443 --name ${containerName} ${imageName}