const PerfilPessoaService = require('../PerfilPessoa')
class ListService {
	
	constructor( _repo ){
		this.repo = _repo
	}
	getById(id){
        return new Promise((resolve, reject) =>{
            this.repo.getById(id)
                .then(async response =>{
                    const perfil = await PerfilPessoaService.getByPerson(id)
                    
                    const {idPerfil} = perfil.dataValues
                    
                    resolve({...response.dataValues, perfil: idPerfil })
                })
        })
		
	}
	
	getAll(){
		return this.repo.getAll()
	}
	
    buscarTotalCpf(cpf){
		return this.repo.buscarTotalCpf(cpf)
	}



	
}

module.exports =  ListService


