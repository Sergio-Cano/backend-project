## PROYECTO BACKEND - PLATAFORMA DE VENTA ENTRE PARTICULARES

En primer lugar, crea las tablas utilizando el siguiente archivo: sql/creations.sql

Antes de hacer las inserciones, vamos a crear los siguientes usuarios (las inserciones de SQL van asociadas a estos usuarios,  necesitamos que estén creados antes en nuestra tabla de usuarios).

// POST http://localhost:PORT/auth/register

Pasamos los usuarios en el body en dos peticiones diferentes:

{
    "name": "testUser1",
    "password": "1234"
}

-------------------------------------------

{
    "name": "testUser2",
    "password": "5678"
}

Una vez hecho, ya puedes comenzar a utilizar los endpoints.

1 - Comprobar listado de usuarios (getUsers)
// GET http://localhost:PORT/users/

Devuelve la lista de usuarios y el número de productos que tiene a la venta cada uno.


2 - Comprobar listado de productos (getProducts)
// GET http://localhost:PORT/products/

Devuelve toda la lista de productos, su precio y su vendedor.


3 - Ver listados de productos de un único vendedor (getProductsByVendor)
// GET http://localhost:PORT/products/:vendor

Devuelve el listado de productos de un único vendedor.



4 - Creación de usuario (register)
// POST http://localhost:PORT/auth/register

Se debe pasar el body de la siguiente forma:

{
    "name": "Sergio",
    "password": "456"
}


5 - Inicio de sesión (login)
// POST http://localhost:PORT/auth/login

Se debe pasar el body de la siguiente forma:

{
    "name": "Sergio",
    "password": "456"
}


6 - Cierre de sesión (logout)
// POST http://localhost:PORT/auth/logout


# MÉTODOS QUE REQUIEREN ESTAR AUTENTICADO

7 - Añadir producto (addProduct)
// POST http://localhost:PORT/products/new

Este producto añadido se asociará a nuestro usuario (user -> vendor_id)

Se debe pasar el body de la siguiente forma:

{
    "name": "Auriculares",
    "prize": 50
}


8 - Editar producto (editProduct)
// PUT http://localhost:PORT/products/:name

Se debe pasar el body de la siguiente forma:

{
    "name": "Auriculares",
    "prize": 50
}


9 - Borrar producto (deleteProduct)
// DELETE http://localhost:PORT/products/:name


10 - Comprar producto (buyProduct)
// POST http://localhost:PORT/products/:name/buy

Compramos un producto y se registra la compra (tabla transactions)


11 - Consultar compras realizadas (getPurchasedProducts)
// GET http://localhost:PORT/products/purchased


12 - Mandar mensaje a otro usuario (sendMessage)
// POST http://localhost:PORT/users/chats/:name

Mandamos el mensaje en el body de la siguiente forma:

{
    "message": "Hola, ¿cómo estás?"
}


13 - Ver chats con otros usuarios (getChat)
// GET http://localhost:PORT/users/chats/:name

Podemos consultar todos los mensajes enviados y recibidos con otro usuario.


