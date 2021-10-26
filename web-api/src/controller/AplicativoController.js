const AplicativoService = require('../service/Aplicativo')

class AplicativoController{
    create(req, res){
        AplicativoService
            .create(req.body)
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar criar'})
            })
    }

    update(req, res){
        AplicativoService
            .update(Number(req.params.id), req.body)
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar atualizar'})
            })
    }
    delete(req, res){
        AplicativoService
            .delete(Number(req.params.id))
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar remover'})
            })
    }
    getById(req, res){
        
        AplicativoService
            .getById(Number(req.params.id))
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar buscar'})
            })
    }
    
    getAll(req, res){        
        AplicativoService
            .getAll()
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar buscar'})
            })
    }
    
    
}

module.exports = new AplicativoController