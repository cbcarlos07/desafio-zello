const PessoaService = require('../service/Pessoa')

class PessoaController{
    create(req, res){
        PessoaService
            .create(req.body)
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar criar'})
            })
    }

    update(req, res){
        PessoaService
            .update(Number(req.params.id), req.body)
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar atualizar'})
            })
    }
    delete(req, res){
        PessoaService
            .delete(Number(req.params.id))
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar remover'})
            })
    }
    getById(req, res){
        
        PessoaService
            .getById(Number(req.params.id))
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar buscar'})
            })
    }
    
    getAll(req, res){        
        PessoaService
            .getAll()
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar buscar'})
            })
    }
    getAuth(req, res){        
        PessoaService
            .getAuth(req.body)
            .then(response => {
                res.json(response)
            }, err => {
                res.status(500).json({msg: 'Houve um problema ao tentar buscar', errors: err})
            })
    }
    
    
}

module.exports = new PessoaController