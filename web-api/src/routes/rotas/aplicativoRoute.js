const { Router } = require('express')
const AplicativoController = require('../../controller/AplicativoController')


const router = new Router()
const prefix = 'aplicativo'
router.post(`/${prefix}`, AplicativoController.create)
router.put(`/${prefix}/:id`, AplicativoController.update)
router.delete(`/${prefix}/:id`, AplicativoController.delete)
router.get(`/${prefix}/:id`, AplicativoController.getById)
router.get(`/${prefix}`, AplicativoController.getAll)


module.exports = router