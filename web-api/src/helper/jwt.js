const jwt = require('jsonwebtoken')

const jwtMiddleware = deps => {
    
    return async (req, res, next) => {  
      
        let find = deps.blocks.filter( e => req.url.includes(e)  )
              
        if( find.length > 0 ){
            const token = req.headers['x-access-token']
            if( !token ){
                res.status( 403 ).json( {errors: ['Token não fornecido']} )
                return false
            }
            try {
                req.decoded = jwt.verify( token, process.env.SECRET )
            } catch (error) {
                console.log('error token', error);
                res.status( 403 ).json(  {errors: ['Falha ao autenticar o token ou token expirado']} )
            }
        }
        next()
    }
}


module.exports = jwtMiddleware