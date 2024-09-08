const axios = require('axios')

module.exports = class MainController {

    static async buscarFrase(req, res) {
        try {    
            const textKanye = await axios.get('https://api.kanye.rest/text');
            res.status(200).json({frase: textKanye.data});
        } catch(error) {
            console.error({error : "Erro ao fazer requisição a API externa."});
            res.send(500).json({error: "Erro ao fazer requisição a API EXTERNA"})
        }
    }

};