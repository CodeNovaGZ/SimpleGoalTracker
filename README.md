# Goal simple tracker
App para gestionar el seguimiento de metas personales. Permite a los usuarios crear, listar, actualizar y consultar sus objetivos diarios a corto y largo plazo.

## Funcionalidades principales
Gestión de Metas: Listado completo y búsqueda individual.
Estado de Progreso: Soporte para identificar metas completadas vs. pendientes.
Arquitectura Escalable: Basada en TypeScript para garantizar la integridad de los datos en todo el ciclo de vida de la meta.

## Tecnologías
### Backend
 Lenguaje: Typescript.
 Runtime: Node.
 Frameworks: Express.
 Base de datos: MySQL.
 Dependencias: Prisma, Zod.

## Frontend
Lenguaje: Typescript.
Frameworks: Tailwind CSS, React
Dependencias: TanStackQuery

## Endpoints de la API
| **Método** | **Endpoint**       | **Descripción**                                          |
| ---------- | ------------------ | -------------------------------------------------------- |
| `GET`      | `/goals`           | Recupera todas tus metas.                                |
| `GET`      | `/goals/:id`       | Consulta el detalle de una meta.                         |
| `GET`      | `/goals/:id/tasks` | Obtiene todas las tareas de una meta específica.         |
| `POST`     | `/goals/:id/tasks` | Crea una nueva tarea dentro de una meta.                 |
| `PATCH`    | `/tasks/:taskId`   | Actualiza el estado (completado/pendiente) de una tarea. |



## Instalación
Instala las dependencias: npm install

Inicia en modo desarrollo: npm run dev

¡Empieza a rastrear tus metas!


## Pruebas
El proyecto usa Jest y Supertest para los tests de la API.

Ejecuta la suite de tests: npm test

Los tests se localizan en la carpeta `tests/` y cubren los endpoints del controlador de metas (`GET /goals` y `GET /goals/:id`).



## Próximos pasos
- [ ] Implementar CRUD completo de metas.
- [ ] Implementar CRUD completo de tareas
- [ ] Añadir persistencia de datos (conectar a una base de datos real)
- [x] Añadir test unitarios al controlador de metas.