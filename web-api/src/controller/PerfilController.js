const PerfilService = require('../service/Perfil')

class PerfilController{
    create(req, res){
        PerfilService
            .create(req.body)
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar criar'})
            })
    }

    update(req, res){
        PerfilService
            .update(Number(req.params.id), req.body)
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar atualizar'})
            })
    }
    delete(req, res){
        PerfilService
            .delete(Number(req.params.id))
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar remover'})
            })
    }
    getById(req, res){
        
        PerfilService
            .getById(Number(req.params.id))
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar buscar'})
            })
    }
    
    getAll(req, res){        
        PerfilService
            .getAll()
            .then(response => {
                res.json(response)
            }, err => {
                console.log('err',err);
                res.status(500).json({msg: 'Houve um problema ao tentar buscar'})
            })
    }
    
    
}

module.exports = new PerfilController