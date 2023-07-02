# Argentina Programa 4.0
## Backend - UNTREF

### Primer proyecto integrador:
**Servidor HTTP con Node.js y Express**
---

### Rutas

> Cualquier otra petición fuera de *__/api__* es redirigida a la ruta *__/404.html__* de los archivos públicos.

> Cualquier ruta dentro de *__/api__* será gestionada por el enrutador y sus respuestas serán siempre en *JSON*

> Todos los endpoints devuelven los datos en *JSON* con hasta tres propiedades *__{status, message, payload}__*

> En caso de éxito *__message__* devuelve *__'Success'__*, de lo contrario devuelve la descripción del error.

> Cuando ejecuta la petición correctamente también devuelve *__payload__* que tiene el objeto con la información relevante.

> En caso de no encontrarse la ruta dentro de *__/api__* la respuesta también es en *JSON*

- *GET* => /api/products => *Lista todos los productos*
- *POST* => /api/products => *Crea un producto '__{name, description, price, manufacturer, categoty}__'*
- *GET* => /api/products/:id => *Lista un producto por __'id'__*
- *PUT* => /api/products/:id => *Actualiza un producto '__{id, name, description, price, manufacturer, categoty}__'*
- *DELETE* => /api/products/:id => *Elimina un producto por '__id__'*