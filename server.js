const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// Adicione o middleware de autenticação antes do roteador
server.db = router.db;
server.use(auth);
server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server está executando em http://localhost:${port}`);
});
