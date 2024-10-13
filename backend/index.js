// Importar express y se ejecuta para obtener un enrutador (app)
const express = require("express");
const app = express();
/* REQUERIMIENTO 1 */
/* para habilitar los cors */
const cors = require("cors");
/* Importa el paquete express y las funciones de post.js */
const { agregarPost, obtenerPosts } = require("./posts");
/* Crea un servidor en el puerto 3000 */
app.listen(3000, console.log("SERVIDOR ENCENDIDO"));
app.use(cors());
/* parsear el cuerpo de la consulta */
app.use(express.json());

/* REQUERIMIENTO 3 */
/* Crea una ruta GET /posts que utilice la función obtenerPosts para devolver los registros a una aplicación cliente. */
app.get("/posts", async (req, res) => {
  const posts = await obtenerPosts();
  res.json(posts);
});

/* REQUERIMIENTO 4 */
/* se crea una ruta posts, agregar nuevo post desde el frontend, se utiliza url que es lo indicado en app.js del frontend */
app.post("/posts", async (req, res) => {
  /* se recibe los datos enviados desde el frontend en app.jsx */
  const { titulo, url, descripcion } = req.body;
  /* likes se inicia con 0 */
  const likes = 0;
  /* se llama a la funcion agregarPost de posts.js y le pasa cuatro argumentos */
  await agregarPost(titulo, url, descripcion, likes);
  res.send("Post agregado con éxito");
});
