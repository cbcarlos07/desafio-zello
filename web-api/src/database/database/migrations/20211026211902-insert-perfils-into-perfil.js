'use strict';

const tableName = 'tb_perfil'
const Op = require('sequelize').Op;
module.exports = {
    up: async (queryInterface, Sequelize) => {
        
        return queryInterface.bulkInsert(
            {  tableName },
            [
                {
                    nome: 'Administrador',
                },
                {
                    nome: 'Gestor',
                },
                {
                    nome: 'Usuário Comum',
                },
                
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
                { id: { [Op.in]: [1, 2,3] } }
                );
            }
        };
        