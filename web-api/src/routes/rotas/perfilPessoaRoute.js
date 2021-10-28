const { Router } = require('express')
const PerfilPessoaController = require('../../controller/PerfilPessoaController')


const router = new Router()
const prefix = 'perfil-pessoa'
router.patch(`/${prefix}/auth`, PerfilPessoaController.auth)

module.exports = router