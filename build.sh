export NAMAZ_VERSION=1.1.1
# docker build -t 485615673038.dkr.ecr.eu-central-1.amazonaws.com/namaz.azan.ru:${NAMAZ_VERSION} .
# docker push 485615673038.dkr.ecr.eu-central-1.amazonaws.com/namaz.azan.ru:${NAMAZ_VERSION}
docker build -t registry.digitalocean.com/azan-ru/namaz.azan.ru:${NAMAZ_VERSION} .
docker push registry.digitalocean.com/azan-ru/namaz.azan.ru:${NAMAZ_VERSION}
