export NAMAZ_VERSION=2.0.4
docker build -t reg.azan.ru/namaz:${NAMAZ_VERSION} .
docker push reg.azan.ru/namaz:${NAMAZ_VERSION}
