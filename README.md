# Argentina Programa 4.0
## Backend - UNTREF

### Primer proyecto integrador:
**Servidor HTTP con Node.js y Express**
---

### Primero
Clonar el repositorio y correr `npm install`

Para inciar el servidor correr `npm test`

Por defecto iniciara en [http://127.0.0.1:8080]

### Dependencias
- dotenv
- express
- nodemon
- eslint

### Rutas

> Cualquier otra petición fuera de `/api` es redirigida a la ruta `/404.html` de los archivos públicos.

> Cualquier ruta dentro de `/api` será gestionada por el enrutador y sus respuestas serán siempre en *JSON*

> Todos los endpoints devuelven los datos en *JSON* con hasta tres propiedades `{status, message, payload}`

> En caso de éxito `message` devuelve `'Success'`, de lo contrario devuelve la descripción del error.

> Cuando ejecuta la petición correctamente también devuelve `payload` que tiene el objeto con la información relevante.

> En caso de no encontrarse la ruta dentro de `/api` la respuesta también es en *JSON*

- *GET* => /api/products => *Lista todos los productos*
- *POST* => /api/products => *Crea un producto* `{name, description, price, manufacturer, categoty}`
- *GET* => /api/products/:id => *Lista un producto por* `id`
- *PUT* => /api/products/:id => *Actualiza un producto* `{id, name, description, price, manufacturer, categoty}`
- *DELETE* => /api/products/:id => *Elimina un producto por* `id`