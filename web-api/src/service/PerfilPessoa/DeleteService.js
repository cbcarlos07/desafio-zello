class DeleteService {
    constructor(_repo){
        this.repo = _repo
    }
    delete(id){
        return this.repo.delete( id )
    }
}

module.exports =  DeleteService