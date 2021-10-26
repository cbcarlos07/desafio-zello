const Sequelize = require('sequelize');

class Pessoa extends Sequelize.Model {
  static init(sequelize) {
    super.init(
		{
			
			cpf: {
                type: Sequelize.STRING(11),
                  allowNull: false					
            },
            nome: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            dataNascimento: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            rg: {
                type: Sequelize.INTEGER,
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
		},
		{
			sequelize,
			tableName: 'tb_pessoa',
			timestamps: false,
			underscored: true
		}
    );
  
    return this;
  }
}

module.exports = Pessoa