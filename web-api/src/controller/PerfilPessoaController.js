const PerfilPessoaService = require('../service/PerfilPessoa')

class PerfilPessoaController{
    auth(req, res){
        PerfilPessoaService
            .auth(req.body)
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar logar'})
            })
    }

    
    
    
}

module.exports = new PerfilPessoaController