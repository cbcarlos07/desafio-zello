
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

    delete(param){
        return PerfilPessoa.destroy({where: param})
    }

    getByPerson(id){
        return PerfilPessoa.findOne(
            {
                where: {idPessoa: id},
                include: [
                    { association: '_perfil'}
                ]
            })
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

    listarTodos(){
        return PerfilPessoa.findAll({
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

