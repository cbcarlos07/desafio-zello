'use strict';
const tableName = 'tb_pessoa'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			tableName,
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				cpf: {
					type: Sequelize.STRING(11),
          			allowNull: false,
                    primaryKey: true,
				},
				nome: {
					type: Sequelize.STRING(255),
					allowNull: false
                },
				data_nascimento: {
					type: Sequelize.DATEONLY,
					allowNull: false
                },
                rg: {
					type: Sequelize.STRING,
					allowNull: false
                },
                senha: {
					type: Sequelize.TEXT,
					allowNull: false
                },				
                foto: {
					type: Sequelize.TEXT,
					allowNull: true
                },				
                latitude: {
					type: Sequelize.INTEGER,
					allowNull: true
                },
                longitude: {
					type: Sequelize.INTEGER,
					allowNull: true
                },
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
