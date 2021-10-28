
const PerfilPessoa = require('../database/models/PerfilPessoa')
class PerfilPessoaRepository {
    create(obj){
        return PerfilPessoa.create( obj )
    }

    update(id, obj){
        return PerfilPessoa.update(obj, {where: {id}})
    }

    getById(id){
        return PerfilPessoa.findByPk( id )
    }

    getAll(){  
        return PerfilPessoa.findAll()
    }

    delete(id){
        return PerfilPessoa.destroy({where: {id}})
    }     

    auth(params){
        const { cpf, senha } = params
        return PerfilPessoa.findOne({
            where: {
                '$_pessoa.cpf$': cpf, 
                '$_pessoa.senha$': senha
            },
            include: [
                {
                    association: '_pessoa'
                },
                { 
                    association: '_perfil'
                }
            ]
        })
    }   
    

}

module.exports = new PerfilPessoaRepository

