'use strict';
const tableName = 'tb_perfil_pessoa'
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
				id_pessoa: {
					type: Sequelize.INTEGER,
                    allowNull: false,
					references: { model: {tableName: 'tb_pessoa'}, key: 'id' }
                },
				id_perfil: {
					type: Sequelize.INTEGER,
                    allowNull: false,
					references: { model: {tableName: 'tb_perfil'}, key: 'id' }
                }
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable({ tableName });
	},
};
