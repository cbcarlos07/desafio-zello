const { Router } = require('express')
const express = require('express')
const path = require('path')
const PerfilPessoaController = require('./../../controller/PerfilPessoaController')
const router = new Router()
const publicDir = path.resolve('public')
router.get('/', (req, res, next)=>{
    res.json({msg: 'Bem vindo à API  Zello'})
})

router.patch('/auth', PerfilPessoaController.auth)
router.use('/foto',express.static(publicDir))

module.exports = router