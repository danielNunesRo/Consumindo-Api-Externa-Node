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

    static async buscarCEP(req, res) {
        try {
            const { userCEP } = req.params;
            const infoCEP = await axios.get(`https://viacep.com.br/ws/${userCEP}/json`);
            res.status(200).json({
                cepFornecido: infoCEP.data.cep,
                logradouro: infoCEP.data.logradouro,
                bairro: infoCEP.data.bairro
            })
        } catch (error) {
            console.error({error : "Nao foi possivel buscar o CEP desejado",
                motivo: error.response
            });
            res.status(400).json({forbidden: "CEP nao encontrado."})
        }
    }

};