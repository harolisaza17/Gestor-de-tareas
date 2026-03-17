# Gestor de Tareas por Equipos API

API REST con Node.js, Express y PostgreSQL para registrar usuarios, crear equipos y gestionar tareas por equipo.

## Requisitos
- Node.js 18+
- PostgreSQL 14+

## Arquitectura
Estructura principal del proyecto:
```text
.
|-- app.js
|-- src/
|   |-- controllers/
|   |   |-- authController.js
|   |   |-- teamController.js
|   |   `-- taskController.js
|   |-- db/
|   |   `-- index.js
|   |-- queries/
|   |   `-- db.queries.js
|   `-- routes/
|       |-- authRotes.js
|       |-- teamRotes.js
|       `-- taskRoutes.js
`-- database/
    `-- schema.sql
```
## Clonar el repositorio:
```bash
git clone https://github.com/harolisaza17/Gestor-de-tareas.git
```
## Entrar al proyecto:
```bash
cd gestor-de-tareas
```
## Instalacion
```bash
npm install
```

## Variables de entorno
Crea un archivo `.env` en la raiz con:
```env
SRV_PORT=3500

DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_contrasena
DB_NAME=taskFlow
DB_PORT=5432
```

## Base de datos
El schema esta en `database/schema.sql`.


## Ejecutar el servidor
```bash
npm run dev
```

## Endpoints
### Autenticacion
- `POST /auth/register`
```json
{
  "name": "Harol",
  "email": "harol@email.com",
  "password": "123456"
}
```

- `POST /auth/login`
```json
{
  "email": "harol@email.com",
  "password": "123456"
}
```

### Equipos
- `POST /teams`
```json
{
  "name": "Equipo Desarrollo",
  "createdBy": 1
}
```

- `POST /teams/:id/members`
```json
{
  "userId": 2
}
```

- `GET /teams/:id/members`

### Tareas (por equipo)
- `GET /tasks/:id` (id = teamId)

- `POST /tasks`
```json
{
  "title": "Crear API",
  "description": "Desarrollar endpoints",
  "assignedTo": 1,
  "teamId": 1
}
```

- `PUT /tasks/:id`
```json
{
  "title": "Actualizar API",
  "description": "Nuevo detalle",
  "status": "en_progreso",
  "assignedTo": 1
}
```

- `DELETE /tasks/:id`

## Scripts
```json
"scripts": {
  "dev": "node --env-file=.env --watch app.js",
  "start": "node app.js"
}
```

## Pruebas
Puedes probar la API con Postman o Thunder Client.
