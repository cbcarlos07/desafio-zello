
const Perfil = require('../database/models/Perfil')
class PerfilRepository {
    create(obj){
        return Perfil.create( obj )
    }

    update(id, obj){
        return Perfil.update(obj, {where: {id}})
    }

    getById(id){
        return Perfil.findByPk( id )
    }

    getAll(){  
        return Perfil.findAll()
    }

    delete(id){
        return Perfil.destroy({where: {id}})
    }        
    

}

module.exports = new PerfilRepository

