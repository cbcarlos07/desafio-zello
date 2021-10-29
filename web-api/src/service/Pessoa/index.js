const PessoaRepository = require("../../repositories/PessoaRepository");
const createService = require("./CreateService");
const deleteService = require("./DeleteService");
const listService = require("./ListService");
const updateService = require("./UpdateService");

const create = new createService( PessoaRepository )
const deleteFn = new deleteService( PessoaRepository )
const list = new listService( PessoaRepository )
const update = new updateService( PessoaRepository )

module.exports = {
    create: obj => create.create(obj),
    update: (id, obj) => update.update(id, obj),
    getById: id => list.getById(id),
    getAll: () => list.getAll(),
    buscarTotalCpf: cpf => list.buscarTotalCpf(cpf),
    verificarSeDado: () => list.verificarSeDado(),
    delete: id => deleteFn.delete(id)
}