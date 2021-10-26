const { Router } = require('express')

const PessoaController = require('./../../controller/PessoaController')
const router = new Router()

router.get('/', (req, res, next)=>{
    res.json({msg: 'Bem vindo à API  Zello'})
})

router.patch('/auth', PessoaController.getAuth)

module.exports = router