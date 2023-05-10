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

4 - Creación de usuario
// POST http://localhost:PORT/auth/register



