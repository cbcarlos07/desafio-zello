const Sequelize = require('sequelize')
const dbConfig = require('../database/config/database')
const fs = require('fs');
const {resolve} = require('path')


const modelsPath = 'src/database/models'

module.exports = () =>{
    const sequelize = new Sequelize( dbConfig );

    const db = fs.readdirSync(modelsPath)
                    .filter(f => f.indexOf('.') != 0)
                    .reduce((db, f)=>{
                        let model = require(resolve( modelsPath, f ));
                        if( model.init ){
                            model.init( sequelize )
                        }else if( typeof model === 'function' ){
                            model = model(sequelize, Sequelize)
                        }
                        db[model.name] = model
                        return db
                    }, {})

    Object.keys(db).forEach(modelName =>{
        if(db[modelName].associate){
            db[modelName].associate(db)
        }
    })

    db.sequelize = sequelize
    db.Sequelize = Sequelize
    return db
}

