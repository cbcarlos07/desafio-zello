
class CreateService {
    
    constructor( _repo ){
        this.repo = _repo
    }
    create(obj){
        return this.repo.create( obj )
    }
}

module.exports = CreateService