FROM nginx:latest
# 维护者信息
MAINTAINER lhf

# 将当前dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下
COPY dist/ /usr/share/nginx/html/

# 挂载ssl证书，当前路径(docker构建镜像时所在的目录，执行构建时的路径)下的ssl复制整个ssl文件夹。
COPY ssl/ /ssl/

# 将当前目录下ng配置文件复制到/etc/nginx/conf/nginx.conf 目录下
# COPY nginx.conf /etc/nginx/conf/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf