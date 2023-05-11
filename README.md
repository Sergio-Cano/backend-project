## PROYECTO BACKEND - PLATAFORMA DE VENTA ENTRE PARTICULARES

1 - Comprobar listado de usuarios (getUsers)
// GET http://localhost:PORT/users/

Devuelve la lista de usuarios y el número de productos que tiene a la venta cada uno.


2 - Comprobar listado de productos (getProducts)
// GET http://localhost:PORT/products/

Devuelve toda la lista de productos, su precio y su vendedor.

3 - Ver listados de productos de un único vendedor (getProductsByVendor)
// GET http://localhost:PORT/products/:vendor

Devuelve el listado de productos de un único vendedor.

# LOS SIGUIENTES MÉTODOS IMPLICARÁN ESTAR AUTENTICADO, POR LO QUE VAMOS A COMENZAR POR CREAR NUESTRO USUARIO Y REGISTRARNOS

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
// POST http://localhost:PORT/products/

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

