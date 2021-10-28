
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

	
}

module.exports =  ListService


