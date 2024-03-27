<div align="center" id="top"> 
  <!-- <img src="/src/assets/SL.png" alt="{{app_name}}" width="80"/> -->

  <!-- &#xa0; -->

  <!-- <a href="https://{{app_url}}.netlify.app">Demo</a> -->
</div>

<h1 align="center">ArroWPass</h1>

<p align="center" style="display:flex; justify-content:space-evenly;">
  <img width="60"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  <img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
<img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

 <!-- <img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
 <img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
<img width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"/> -->

</p>

<hr>

<p align="center">
  <a href="#descripción">Descripción</a> &#xa0; | &#xa0; 
  <a href="#Requirimientos">Requirimientos</a> &#xa0; | &#xa0; 
  <a href="#Instalación">Instalación</a> 
</p>

## :dart: Descripción

Track de flecha amarilla sobre un boleto virtual y asi...

## :white_check_mark: Requirimientos

Antes de iniciar debes tener [Git](https://git-scm.com), y [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Instalación

```bash
# clonar este proyecto
$ git clone https://github.com/whoAngeel/arrowpass.git

# dirigirse a la ruta del backend
$ cd arrowpass

# instalar las dependencias
$ npm i

# levantar la base de datos de docker
# $ docker-compose up -d postgres

# Ejecutar este proyecto
$ npm run dev

```

!NOTA! Si te da error la conexion de la base de datos, creala con el nombre 'test_arrowpass'

## variables de entorno DEV

cambiar de ser necesario

```js
DB_HOST = "localhost";
DB_USER = "root";
DB_PASS = admin;
DB_PORT = 3306;
DB_NAME = test_arrowpass;
```

<a href="#top">Back to top</a>
