'use strict';

const tableName = 'tb_pessoa'
const Op = require('sequelize').Op;
module.exports = {
    up: async (queryInterface, Sequelize) => {
        
        return queryInterface.bulkInsert(
            {  tableName },
            [
                {
                    cpf: '51823828710',
                    nome: 'Carlos Bruno',
                    data_nascimento: '1985-08-04',
                    rg: '18474683',
                    senha: '25d55ad283aa400af464c76d713c07ad',
                    foto: null,
                    latitude: null,
                    longitude: null,
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
        