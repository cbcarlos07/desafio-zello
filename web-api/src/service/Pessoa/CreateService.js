const PerfilPessoaService = require('../PerfilPessoa')
class CreateService {
    
    constructor( _repo ){
        this.repo = _repo
    }
    create(obj){
        const { perfil } = obj
        delete obj.perfil
        return new Promise((resolve, reject)=>{
            this.repo
                .create( obj )
                .then(async response => {
                    await PerfilPessoaService.create({
                        idPessoa: response.id,
                        idPerfil: perfil
                    })
                    resolve(response)
                })

        })
    }
}

module.exports = CreateService