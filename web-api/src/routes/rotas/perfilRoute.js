const { Router } = require('express')
const PerfilController = require('../../controller/PerfilController')


const router = new Router()
const prefix = 'perfil'
router.post(`/${prefix}`, PerfilController.create)
router.put(`/${prefix}/:id`, PerfilController.update)
router.delete(`/${prefix}/:id`, PerfilController.delete)
router.get(`/${prefix}/:id`, PerfilController.getById)
router.get(`/${prefix}`, PerfilController.getAll)


module.exports = router