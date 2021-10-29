const PerfilPessoaRepository = require("../../repositories/PerfilPessoaRepository");
const createService = require("./CreateService");
const deleteService = require("./DeleteService");
const listService = require("./ListService");
const updateService = require("./UpdateService");

const create = new createService( PerfilPessoaRepository )
const deleteFn = new deleteService( PerfilPessoaRepository )
const list = new listService( PerfilPessoaRepository )
const update = new updateService( PerfilPessoaRepository )

module.exports = {
    create: obj => create.create(obj),
    update: (id, obj) => update.update(id, obj),
    getById: id => list.getById(id),
    getAll: () => list.getAll(),
    listarTodos: () => list.listarTodos(),
    getByPerson: id => list.getByPerson(id),
    auth: params => list.auth(params),
    delete: id => deleteFn.delete(id)
}