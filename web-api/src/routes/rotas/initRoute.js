const { Router } = require('express')

const PerfilPessoaController = require('./../../controller/PerfilPessoaController')
const router = new Router()

router.get('/', (req, res, next)=>{
    res.json({msg: 'Bem vindo à API  Zello'})
})

router.patch('/auth', PerfilPessoaController.auth)

module.exports = router