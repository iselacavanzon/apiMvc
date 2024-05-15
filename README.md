# Tarea -  Modelo MVC

## Propósito

El propósito de esta tarea es entender el funcionamiento del modelo MVC ( Model - View - Controller) 

## Instrucciones

1. Crear un nuevo repositorio el cual contenga su nuevo API . (Pueden hacer uso de este haciendo un fork de mi repositorio https://www.youtube.com/watch?v=3m7Z3g_U-Cs )
2. Configurar y levantar el API haciendo uso de esta guia.
Nota:  En caso de haber hecho fork del proyecto primero ejecutar el comando `npm install` para instalar las dependencias, despues levantar el servidor haciendo uso de `npm run dev`.
3. Utiliza la estructura del proyecto para crear un nuevo endpoint y una nueva visa, los cuales deben de mostrar en la vista el libro seleccionado por indice mediante los parámetros del end point.
4. Adjunta el link de tu repositorio a un archivo y súbelo en la plataforma escolar.
5.Adjunta igualmente fotos de como se ve en funcionamiento tu api.

Nota: puedes probar este api accediendo a los dos siguientes endpoints:
**ruta:**http://localhost:3000/path
**libros:**http://localhost:3000/bookList

Nota: Usa como referencia el código de tu endpoint pasado, el ejemplo de como hacer un request del libro por indice es el siguiente:

```javascript
app.get("/api/books/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const book = data.books.find((book) => book.id === id);
  res.json(book);
});


