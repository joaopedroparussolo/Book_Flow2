const {json} = require('express');
const clientController = require("../model/model");
const client = require('../config/db');
const userController = {
    //Rota Raiz
    getRoot: async(req,res)=>{
        res.status(200).json({msg: "The API is running!!!"})
    },
    //Controller para listar todos os usuários do banco
    listAllUsers: async(req,res)=>{
        try{
            const clients = await clientController.getAllUsers();
            res.status(200).json(clients);
        }
        catch(error){
            res.status(500).json({error: "Erro ao obter a lista de usuários"})
        }
    },
    //Fazer Login do Usuário
    login:async(req,res)=>{
        let {email,senha} = req.body;
        try{
            const sql = await clientController.validate(email,senha);

            if(sql != null){
                res.status(200).json({msg: "Email e senha validados com sucesso!!!"})
            }
            else{
                res.status(401).json({msg:"Email ou senha incorretos"});
            }
        }
        catch(error){
            if(error){
                res.status(500).json(error);
            }
        }
    },

    listAllBooks: async (req, res) => {
        try {
            const clients = await clientController.getBooks();
            console.log(client)
            res.status(200).json(clients);
        }
        catch (error) {
            res.status(500).json({ error: "Erro ao obter a lista de usuários" })
        }
    },

    //cadastrar um novo usuário no banco
    registerBookflow: async (req, res) => {
        const {id, nome, idade, email, senha } = req.body;
        console.log(req.body)

        try {
            const sql = await clientController.getByEmail(email);

            if (sql.length > 0) {
                res.status(401).json({ msg: 'O email já está cadastrado na base de dados, insira um email diferente' });
            }
            if (!email.includes('@')) {
                return res.status(400).json({ msg: 'o email Não é valido (@)' })
            }
            else {
                await clientController.registerBookflow(id, nome, idade, email, senha);
                res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Ocorreu um erro durante o registro do usuário" });
        }
    },
  
    registerImageBookFlow: async (req, res) => {
        try {
            const {imagemBase64,comentario,id} = req.body;

           
            console.log(req.body)

                const result = await clientController.registerImage(imagemBase64,comentario,id);
                return res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
            
        } catch (error) {
            console.error('Erro ao registrar a imagem', error);
           
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },
    
};
module.exports = userController;