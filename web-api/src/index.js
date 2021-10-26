require('dotenv').config()

const app = require('./server')

const PORT = process.env.SERVER_PORT

app.listen(PORT, () =>{
    console.log(`Api rodando na porta ${PORT}`);
})