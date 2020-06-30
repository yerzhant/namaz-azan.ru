export NAMAZ_VERSION=0.1.0
docker build -t 485615673038.dkr.ecr.eu-central-1.amazonaws.com/namaz.azan.ru:${NAMAZ_VERSION} .
docker push 485615673038.dkr.ecr.eu-central-1.amazonaws.com/namaz.azan.ru:${NAMAZ_VERSION}
