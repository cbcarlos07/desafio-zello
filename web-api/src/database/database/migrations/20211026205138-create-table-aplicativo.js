'use strict';
const tableName = 'tb_aplicativo'
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
				nome: {
					type: Sequelize.STRING,
                    allowNull: true
                },
				bundle_id: {
					type: Sequelize.STRING,
                    allowNull: true
					
                }
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
