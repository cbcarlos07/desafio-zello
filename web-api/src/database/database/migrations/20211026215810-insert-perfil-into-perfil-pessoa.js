'use strict';

const tableName = 'tb_perfil_pessoa'
const Op = require('sequelize').Op;
module.exports = {
    up: async (queryInterface, Sequelize) => {
        
        return queryInterface.bulkInsert(
            {  tableName },
            [
                {
                    id_pessoa: 1,
                    id_perfil: 1,
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
        