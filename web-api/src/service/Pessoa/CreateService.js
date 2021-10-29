const PerfilPessoaService = require('../PerfilPessoa')
const ba64 = require('ba64')
const shortId = require('shortid')
const path = require('path')
class CreateService {
    
    constructor( _repo ){
        this.repo = _repo
    }
    async create(obj){
        const { perfil } = obj
        delete obj.perfil
        if( obj.foto && obj.foto != '' ){
            obj.foto = await this.converterBase64ParaImg( obj.foto )
        }
        
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

    converterBase64ParaImg(string){
        const fileName = `${shortId.generate()}`
        
        return new Promise((resolve, reject)=>{
            let path = `./public/${fileName}`
            ba64.writeImage( path ,string, function(err){
                if (err) resolve(false);
                else{
                    resolve(`${fileName}.jpeg`)
                }    
            });

        })
    }
}

module.exports = CreateService