/* DESAFIO 3 MÓDULO NODE */

/* REQUERIMIENTO 2 */
/* La clase Pool nos permite soportar multiconexiones y un mejor rendimiento en las consultas */
const { Pool } = require("pg");
/* Crear una instancia de la clase Pool usando un objeto de configuración con las credenciales. */
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "sql7777",
  database: "likeme",
  allowExitOnIdle: true, // Esta propiedad le indicará a PostgreSQL que cierre la conexión luego de cada consulta
});

/* para agregar nuevo post a la tabla creada en la base de datos */
const agregarPost = async (titulo, img, descripcion, likes) => {
  const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4)";
  const values = [titulo, img, descripcion, likes];
  const result = await pool.query(consulta, values);
  console.log("Post agregado", result.rowCount);
};

/* obtener los registros almacenados en PostgreSQL */
const obtenerPosts = async () => {
  const result = await pool.query("SELECT * FROM posts");
  console.log(result.rows);
  return result.rows;
};
obtenerPosts();

/* exportar las funciones */
module.exports = { agregarPost, obtenerPosts };
