const { verificarSeDado } = require('../service/Pessoa')
const { exec } = require('child_process')
const verificar = async () => {
    try {
        const retorno = await verificarSeDado()
        
    } catch (error) {
        console.log('error');
        await createDatabase()
        setTimeout(async () =>{
            await excutarMigration() 
        },500)
    
    }
    
}
const createDatabase = () => {
    new Promise(async (resolve, reject) => {
        const migrate = exec(
          'npx sequelize db:create',
          {env: process.env},
          err => (err ? reject(err): resolve())
        );
      
        // Forward stdout+stderr to this process
        migrate.stdout.pipe(process.stdout);
        migrate.stderr.pipe(process.stderr);

        
      });
}
const excutarMigration = () => {
    console.log('excutarMigration');
    new Promise((resolve, reject) => {
        const migrate = exec(
          'npx sequelize db:migrate',
          {env: process.env},
          err => (err ? reject(err): resolve())
        );
      
        // Forward stdout+stderr to this process
        migrate.stdout.pipe(process.stdout);
        migrate.stderr.pipe(process.stderr);
      });
}

module.exports = verificar

