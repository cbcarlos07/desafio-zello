const PerfilRepository = require("../../repositories/PerfilRepository");
const createService = require("./CreateService");
const deleteService = require("./DeleteService");
const listService = require("./ListService");
const updateService = require("./UpdateService");

const create = new createService( PerfilRepository )
const deleteFn = new deleteService( PerfilRepository )
const list = new listService( PerfilRepository )
const update = new updateService( PerfilRepository )

module.exports = {
    create: obj => create.create(obj),
    update: (id, obj) => update.update(id, obj),
    getById: id => list.getById(id),
    getAll: () => list.getAll(),
    delete: id => deleteFn.delete(id)
}