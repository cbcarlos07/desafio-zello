const jwt = require('jsonwebtoken');
const md5 = require('md5');
const SECRET = process.env.SECRET
class ListService {
	
	constructor( _repo ){
		this.repo = _repo
	}
	getById(id){
		return this.repo.getById(id)
	}
	
	getAll(){
		return this.repo.getAll()
	}

    getByPerson(id){
        return this.repo.getByPerson(id)
    }

    listarTodos(){
        return new Promise((resolve, reject)=>{
            this.repo.listarTodos()
                .then(response => {
                    const lista = response.map(item => {                        
                        return { id: item._pessoa.id, nome: item._pessoa.nome, perfil: item._perfil.nome }
                    })
                    resolve(lista)
                })
        })
        
    }

    auth(data){
        data.senha = md5(data.senha)
        return new Promise((resolve, reject) => {
            this.repo
                .auth(data)
                .then(response => {

                    if( response ){
                        const token = this.gerarToken(response.cpf)
                        delete response.senha
                        let dados = {...response.dataValues}
                        dados.token = token
                        const pessoa = dados._pessoa
                        delete pessoa.dataValues.senha
                        
                        resolve( { pessoa: {...pessoa.dataValues}, perfil: {...dados._perfil.dataValues}, token: dados.token } )
                    }else{
                        reject( ['Login ou senha incorretos']) 
                    }
                    
                    
               /* }else{
                    reject( ['Usuário não está ativo. Por favor entrar em contato com o suporte']) 
                }*/


                })

        })    
	}

    gerarToken(cpf, expiracao = '1d'){
        const token = jwt.sign({ 
                cpf,
            }, SECRET, { 
            expiresIn: expiracao
        });
        return token
    }

}

module.exports =  ListService


