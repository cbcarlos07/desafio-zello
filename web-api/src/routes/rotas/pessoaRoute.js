const { Router } = require('express')
const PessoaController = require('../../controller/PessoaController')


const router = new Router()
const prefix = 'pessoa'
router.post(`/${prefix}`, PessoaController.create)
router.put(`/${prefix}/:id`, PessoaController.update)
router.delete(`/${prefix}/:id`, PessoaController.delete)
router.get(`/${prefix}/:id`, PessoaController.getById)
router.get(`/${prefix}`, PessoaController.getAll)


module.exports = router