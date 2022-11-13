FROM nginx:latest
# 维护者信息
MAINTAINER lhf

# 将当前dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下
COPY dist/ /usr/share/nginx/html/

# 将当前目录下ng配置文件复制到/etc/nginx/conf/nginx.conf 目录下
# COPY nginx.conf /etc/nginx/conf/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf