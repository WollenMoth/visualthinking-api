# visualthinking-api

API creada como parte de un Code Challenge de la NodeJS Mission del programa Launch X de Microsoft.

## Dependencias

- Express: Creación del servidor
- Jest: Creación de pruebas unitarias
- Supertest: Realización de pruebas unitarias a la API
- ESLINT: Dar formato y consistencia al código

## Diseño de los componentes

### Utils

Reader: Clase para leer archivos, con un método estático para leer archivos .json

### Services

StudentService: Clase encargada de realizar el filtrado y mapeado de los estudiantes

### Controllers

StudentController: Clase encargada de conectar al StudentService a la base de datos,
a través del Reader y exponerlo a la API

### Server

Encargado de la configuración de los endpoints a través del StudentController

## API

Los endpoints disponibles en esta API son los siguientes:

### GET /

Muestra un mensaje de bienvenida

### GET /v1/students

Muestra a todos los estudiantes de Visual Thinking

### GET /v1/students/emails

Muestra los correos de los estudiantes que tengan certificación

### GET /v1/students/credits

Muestra los estudiantes que tengan 500 créditos o más

## Notas

El tiempo que tomó la realización de este proyecto fueron aproximadamente 80 minutos
