const server = require("./src/app.js")
const port = process.env.PORT || 3001


// Iniciar el servidor
server.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});  