## PPL

Este repositorio es la unión de todos los microservicios

## Prerrequisitos

* Nodejs > 8.10

* Mongodb

## Puertos microservicios

Puerto microservicio master: 79999

* Login api: 8001
* Assessment api: 8002
* Att api: 8003
* front: 8004
* ppl lab v1: 8000

## Inicial

Clonarlo desde cero

```sh
git clone --recursive https://github.com/espolPPLTeam/ppl_assessment
```

Actualizar todos los submódulos

```sh
git submodule update --remote --recursive
```
<!-- git submodule update --recursive --init -->

```sh
npm install
```

## Development

1. Instalar las depedencias de todos los submódulos

```sh
npm run install:dev 
```

2. Correr el api gateway

```sh
## @Edison
```

## Production

```sh
```

./production # no usarlo en LOCAL
export $(cat .env | xargs) # instalar las variables de entorno
export NODE_ENV=production # 
pm2 start server.js
# pm2 monit
# pm2 restart
# pm2 list
# pm2 stop 0
# https://www.npmjs.com/package/pm2


pm2 start process.yml


apps:
  - script   : app.js
    instances: 4
    exec_mode: cluster
  - script : worker.js
    watch  : true
    env    :
      NODE_ENV: development
    env_production:
      NODE_ENV: production


      pm2 start app.js --name my-api # Name process
      pm2 restart all
      pm2 stop 0  