
class UpdateService {
    
    constructor(_repo){
        this.repo = _repo
    }
    update(id, obj){
        return this.repo.update( id, obj )
    }
}

module.exports =  UpdateService