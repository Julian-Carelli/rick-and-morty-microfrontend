# rick-and-morty-microfrontend

A microfrontend project that works with the Rick And Morty API.

API Link: https://rickandmortyapi.com/

### Prerequisites 📋

```
node -v >=v18
docker (optional)

Have these ports available:
  - 3000 ==> aggregated-microfrontends-hub (host)
  - 3005 ==> rick-and-morty-microfrontend (microfrontend)
  - 3006 ==> harry-potter-microfrontend (microfrontend)
```

### Installation 🔧

#### aggregated-microfrontends-hub (HOST)

Clone project:

```
git clone git@github.com:Julian-Carelli/aggregated-microfrontends-hub.git
```

Enter the folder:

```
cd aggregated-microfrontends-hub
```

Install all project dependencies:

```
npm i
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

#### rick-and-morty-microfrontend (microfrontend)

Clone project:

```
git clone git@github.com:Julian-Carelli/rick-and-morty-microfrontend.git
```

Enter the folder:

```
cd rick-and-morty-microfrontend 
```

Install all project dependencies:

```
npm i
```

Build the application:

```
npm run build (IMPORTANTE)
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

#### harry-potter-microfrontend (microfrontend)

Clone project:

```
git clone git@github.com:Julian-Carelli/harry-potter-microfrontend.git
```

Enter the folder:

```
cd harry-potter-microfrontend
```

Install all project dependencies:

```
npm i
```

Build the application:

```
npm run build (IMPORTANTE)
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

When all environments are running, you should access http://localhost:3000 to see the complete application.

------------------------------------------------------


### Installation with Docker (DOCKER MUST BE INSTALLED GLOBALLY)

#### aggregated-microfrontends-hub (HOST)

Clone project:

```
git clone git@github.com:Julian-Carelli/aggregated-microfrontends-hub.git
```

Enter the folder:

```
cd aggregated-microfrontends-hub
```

Create a container for the project:

```
npm run docker:create
```

Enter the project's container:

```
docker exec -it aggregated-microfrontends-hub-container sh
```

Install all project dependencies:

```
npm i
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

#### rick-and-morty-microfrontend (microfrontend)

Clone project:

```
git clone git@github.com:Julian-Carelli/rick-and-morty-microfrontend.git
```

Enter the folder:

```
cd rick-and-morty-microfrontend
```

Create a container for the project:

```
npm run docker:create
```

Enter the project's container:

```
docker exec -it rick-and-morty-microfrontend-container sh
```

Install all project dependencies:

```
npm i
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

#### harry-potter-microfrontend (microfrontend)

Clone project:

```
git clone git@github.com:Julian-Carelli/harry-potter-microfrontend.git
```

Enter the folder:

```
cd harry-potter-microfrontend
```

Create a container for the project:

```
npm run docker:create
```

Enter the project's container:

```
docker exec -it harry-potter-microfrontend-container sh
```

Install all project dependencies:

```
npm i
```

Run the command for the development environment:

```
npm run dev
```

------------------------------------------------------

When all environments are running, you should access http://localhost:3000 to see the complete application.

------------------------------------------------------

To run tests:

```
npm run test
```

### Pre-requisitos 📋

```
node -v >=v18
docker (opcional)

Tener estos puertos libres:
  - 3000 ==> aggregated-microfrontends-hub (host)
  - 3005 ==> rick-and-morty-microfrontend (microfrontend)
  - 3006 ==> harry-potter-microfrontend (microfrontend)
```

### Instalación 🔧

#### aggregated-microfrontends-hub (HOST)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/aggregated-microfrontends-hub.git
```

Entrar a la carpeta:

```
cd aggregated-microfrontends-hub
```

instalar todas las dependencias del proyecto:

```
npm i
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

#### rick-and-morty-microfrontend (microfrontend)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/rick-and-morty-microfrontend.git
```

Entrar a la carpeta:

```
cd rick-and-morty-microfrontend 
```

instalar todas las dependencias del proyecto:

```
npm i
```

Buildear la aplicacion:

```
npm run build (IMPORTANTE)
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

#### harry-potter-microfrontend (microfrontend)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/harry-potter-microfrontend.git
```

Entrar a la carpeta:

```
cd harry-potter-microfrontend
```

instalar todas las dependencias del proyecto:

```
npm i
```

Buildear la aplicacion:

```
npm run build (IMPORTANTE)
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

Cuando todos los ambientes esten corriendo, se deberia acceder a http://localhost:3000 para poder ver la aplicacion completa

------------------------------------------------------


### Instalación con docker (SE REQUIRE TENER INSTALADO DOCKER DE FORMA GLOBAL)

#### aggregated-microfrontends-hub (HOST)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/aggregated-microfrontends-hub.git
```

Entrar a la carpeta:

```
cd aggregated-microfrontends-hub
```

Crear contenedor del proyecto:

```
npm run docker:create
```

Entrar al contenedor del proyecto:

```
docker exec -it aggregated-microfrontends-hub-container sh
```

instalar todas las dependencias del proyecto:

```
npm i
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

#### rick-and-morty-microfrontend (microfrontend)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/rick-and-morty-microfrontend.git
```

Entrar a la carpeta:

```
cd rick-and-morty-microfrontend
```

Crear contenedor del proyecto:

```
npm run docker:create
```

Entrar al contenedor del proyecto:

```
docker exec -it rick-and-morty-microfrontend-container sh
```

instalar todas las dependencias del proyecto:

```
npm i
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

#### harry-potter-microfrontend (microfrontend)

Clonar proyecto:

```
git clone git@github.com:Julian-Carelli/harry-potter-microfrontend.git
```

Entrar a la carpeta:

```
cd harry-potter-microfrontend
```

Crear contenedor del proyecto:

```
npm run docker:create
```

Entrar al contenedor del proyecto:

```
docker exec -it harry-potter-microfrontend-container sh
```

instalar todas las dependencias del proyecto:

```
npm i
```

ejecutar el comando para el ambiente de desarrollo

```
npm run dev
```

------------------------------------------------------

Cuando todos los ambientes esten corriendo, se deberia acceder a http://localhost:3000 para poder ver la aplicacion completa

------------------------------------------------------

Para correr los tests:

```
npm run test
```