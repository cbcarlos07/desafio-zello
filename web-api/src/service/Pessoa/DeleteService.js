const PerfilPessoaService = require('../PerfilPessoa')
class DeleteService {
    constructor(_repo){
        this.repo = _repo
    }
    delete(id){
        return new Promise((resolve, reject)=>{
            PerfilPessoaService.delete( {idPessoa: id} )
                .then(response => {
                    const remover = this.repo.delete( id )
                    resolve(remover)

                })
        })
    }
}

module.exports =  DeleteService