#  Gestor de Tareas por Equipos API

API REST desarrollada con Node.js y Express que permite a los usuarios registrarse, crear equipos y gestionar tareas dentro de esos equipos.

Este proyecto implementa una arquitectura **MVC**, autenticación segura con bcrypt y relaciones en base de datos PostgreSQL.

--


#  Arquitectura

El proyecto sigue el patrón **MVC (Modelo - Vista - Controlador)**:

```bash
src/
├── controllers/
│   ├── authController.js
│   ├── teamController.js
│   └── taskController.js
├── models/
│   ├── userModel.js
│   ├── teamModel.js
│   └── taskModel.js
├── routes/
│   ├── authRoutes.js
│   ├── teamRoutes.js
│   └── taskRoutes.js
├── db/
│   └── index.js
└── app.js
```

* **Controllers** -lógica de negocio
* **Models** - consultas SQL
* **Routes** - definición de endpoints
* **db** - conexión a PostgreSQL

---

##  Instalación

1. Clonar el repositorio:

`bash
git clone https://github.com/harolisaza17/Gestor-de-tareas.git


2. Entrar al proyecto:

```bash
cd gestor-de-tareas
```

3. Instalar dependencias:

```bash
npm install
```

4. Crear archivo `.env` en la raíz:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_contrasena
DB_NAME=taskflow
PORT=3000
```

5. Ejecutar el proyecto:

```bash
npm run dev
```

---

##  Autenticación

Se utiliza bcrypt para proteger las contraseñas:

* Las contraseñas se almacenan encriptadas
* Se validan usando `bcrypt.compare()`

---

##  Endpoints

###  Autenticación (`/auth`)

####  Registrar usuario

**POST** `/auth/register`

```json
{
  "name": "Harol",
  "email": "harol@email.com",
  "password": "123456"
}
```

---

####  Login

**POST** `/auth/login`

```json
{
  "email": "harol@email.com",
  "password": "123456"
}
```

---

###  Equipos (`/teams`)

####  Crear equipo

**POST** `/teams`

```json
{
  "name": "Equipo Desarrollo",
  "created_by": 1
}
```

---

####  Agregar miembro

**POST** `/teams/:id/members`

```json
{
  "user_id": 2
}
```

---

####  Listar miembros

**GET** `/teams/:id/members`

---

###  Tareas (`/tasks`)

####  Obtener tareas por equipo

**GET** `/tasks/1`

---

####  Crear tarea

**POST** `/tasks`

```json
{
  "title": "Crear API",
  "description": "Desarrollar endpoints",
  "assigned_to": 1,
  "team_id": 1
}
```

---

####  Editar tarea

**PUT** `/tasks/:id`

```json
{
  "title": "Actualizar API",
  "status": "completado"
}
```

---

####  Eliminar tarea

**DELETE** `/tasks/:id`

---

##  Scripts

```json
"scripts": {
  "dev": "node --env-file=.env --watch src/app.js"
}
```

---

##  Pruebas

La API puede ser probada usando:

* Postman
* Thunder Client






