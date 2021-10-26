'use strict';

const tableName = 'tb_aplicativo'
const Op = require('sequelize').Op;
module.exports = {
    up: async (queryInterface, Sequelize) => {
        
        return queryInterface.bulkInsert(
            {  tableName },
            [
                {
                    nome: 'Aplicativo Zello',
                    bundle_id: "br.tec.zello"
                }
                
            ],
            {},
            {
                id: { autoIncrement: true },
            }
            );
            
        },
        
        down: async (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete(
                {  tableName },
                { id: { [Op.in]: [1] } }
                );
            }
        };
        