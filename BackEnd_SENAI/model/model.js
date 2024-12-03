const connection = require("../config/db");
const bcrypt = require('bcrypt');
const salt = 10;
const userModel = {
    getAllUsers: async () => {
        const [result] = await connection.query("SELECT * FROM cadastro_livro")
            .catch(erro => console.log(erro));
        return result
    },

    getByID: async (id) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE id =?", [id])
            .catch(erro => console.log(erro));
        return result
    },

    registerUser: async (id, nome, idade, email, senha) => {
        const [result] = await connection.query("INSERT INTO cadastro_livro values(?,?,?,?,?)", [id, nome, idade, email, senha])
            .catch(erro => console.log(erro));
        return result
    },

    getByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result
    },
    getBooks: async () => {
        const [result] = await connection.query("SELECT * FROM cadastro_livro")
            .catch(erro => console.log(erro));
        return result
    },

    validate: async (email, senha) => {
        try {
            const [dadosUsuario] = await connection.query("SELECT * FROM usuario WHERE email=?", [email]);
            const user = dadosUsuario[0];

            if (dadosUsuario.length > 0) {
                const compare = await bcrypt.compare(senha, user.senha)

                if (compare) {
                    return dadosUsuario;
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        } catch (erro) {
            console.log(erro);
            return null;
        }
    },
    registerBookflow: async (id, nome, idade, email, senha) => {
        const hashPassword = await bcrypt.hash(senha, salt);
        const [result] = await connection.query("INSERT INTO usuario values(?,?,?,?,?)", [id, nome, idade, email, hashPassword])
            .catch(erro => console.log(erro));
        return result
    },

    registerImage: async (imagemBase64, comentario, id) => {
        try {
            const [result] = await connection.query("INSERT INTO cadastro_livro (livro,comentario,id) VALUES (?,?,?)", [imagemBase64, comentario, id]);
            return result;
        }
        catch (error) {
            console.log('erro ao registrar a imagem', error)
        }
    },
    getByEmail: async (email) => {
        const [result] = await connection.query("SELECT * FROM usuario WHERE email=?", [email])
            .catch(erro => console.log(erro));
        return result
    },
    getByLivro: async (email) => {
        const [result] = await connection.query("SELECT * FROM cadastro_livro WHERE livro=?", [livro])
            .catch(erro => console.log(erro));
        return result
    },

    getByID: async (id) => {
        const [result] = await connection.query("SELECT * FROM cadastro_senai WHERE id =?", [id])
            .catch(erro => console.log(erro));
        return result
    },

    registerUser: async (id, nome, idade, email, senha) => {
        const [result] = await connection.query("INSERT INTO cadastro values(?,?,?,?,?)", [id, nome, idade, email, senha])
            .catch(erro => console.log(erro));
        return result
    },

    deleteLivro: async (id) => {
        const [result] = await connection.query("DELETE from cadastro_livro WHERE id=?", [id])
            .catch(erro => console.log(erro));
        return result
    },
};
module.exports = userModel;