const express = require("express");
const router = require("./routers");
const client = require("../config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

//Aumentar o limite de tamanho de carga util para 50MB
app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());
app.use((req,res,next) => {
    //Qualquer endereço pode realizar requisição
    res.header("Acess-Control-Allow-Origin", "*");

    //tipos de métodos que a API aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    //Permitir o envio de dados para a API 
    res.header("Access-Control-Allow-Headers", "Content-Type");

    //Quando não houver erro deve continuar o processamento
    next();
});
app.use(cors());
app.use(router);

client.query("select 1").then(()=>{
    console.log("connection success")
    app.listen(8085, function(){
        console.log("Servidor rodando na url:http://localhost:8085")
    });
})
.catch(erro => console.log("connection failed \n" +erro));

