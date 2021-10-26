const AplicativoRepository = require("../../repositories/AplicativoRepository");
const createService = require("./CreateService");
const deleteService = require("./DeleteService");
const listService = require("./ListService");
const updateService = require("./UpdateService");

const create = new createService( AplicativoRepository )
const deleteFn = new deleteService( AplicativoRepository )
const list = new listService( AplicativoRepository )
const update = new updateService( AplicativoRepository )

module.exports = {
    create: obj => create.create(obj),
    update: (id, obj) => update.update(id, obj),
    getById: id => list.getById(id),
    getAll: () => list.getAll(),
    delete: id => deleteFn.delete(id)
}