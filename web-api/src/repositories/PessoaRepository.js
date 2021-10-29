
const Pessoa = require('../database/models/Pessoa')
class PessoaRepository {
    create(obj){
        return Pessoa.create( obj )
    }

    update(id, obj){
        return Pessoa.update(obj, {where: {id}})
    }

    getById(id){
        return Pessoa.findByPk( id )
    }

    getAll(){  
        return Pessoa.findAll()
    }

    delete(id){
        return Pessoa.destroy({where: {id}})
    }

    getAuth(data){
        const { cpf, senha } = data
        return Pessoa.findOne({
            where: {
                cpf, senha
            }
        })
    }

    buscarTotalCpf( cpf ){
        return Pessoa.count({
            where: {
                cpf
            }
        })
    }


    verificarSeDado(){
        return Pessoa.count()
    }
    

}

module.exports = new PessoaRepository

