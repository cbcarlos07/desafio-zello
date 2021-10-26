
const Aplicativo = require('../database/models/Aplicativo')
class AplicativoRepository {
    create(obj){
        return Aplicativo.create( obj )
    }

    update(id, obj){
        return Aplicativo.update(obj, {where: {id}})
    }

    getById(id){
        return Aplicativo.findByPk( id )
    }

    getAll(){  
        return Aplicativo.findAll()
    }

    delete(id){
        return Aplicativo.destroy({where: {id}})
    }        
    

}

module.exports = new AplicativoRepository

