const express = require("express");
const clientController = require("../controller/controller");
const client = require("../config/db")
const router = express.Router();

//projeto
router.get('/',clientController.getRoot); //Rota Raiz
router.post('/api/login',clientController.login); //Login do Usuário
router.get('/api/getBooks',clientController.listAllBooks); //Listar Livros
router.post('/api/usuario',clientController.registerBookflow); //Cadastro do Usuário
router.post('/api/cadastro_livro',clientController.registerImageBookFlow); //Cadastro dos Livro

module.exports = router;

