const { Router } = require('express')
const PerfilPessoaController = require('../../controller/PerfilPessoaController')


const router = new Router()
const prefix = 'perfil-pessoa'
router.patch(`/${prefix}/auth`, PerfilPessoaController.auth)
router.get(`/${prefix}/list`, PerfilPessoaController.listarTodos)

module.exports = router