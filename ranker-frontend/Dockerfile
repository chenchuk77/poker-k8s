FROM trafex/alpine-nginx-php7:latest 
MAINTAINER chenchuk@gmail.com
WORKDIR /var/www/html

# can comment if start.sh is using -v for mounting
#COPY ./html .

EXPOSE 8080

# Let supervisord start nginx & php-fpm
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]

### use this for debug container app issues
#CMD [ "/bin/sleep", "100m" ]
