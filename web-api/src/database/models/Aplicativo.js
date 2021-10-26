const Sequelize = require('sequelize');

class Aplicativo extends Sequelize.Model {
  static init(sequelize) {
    super.init(
		{
            nome: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            bundleId: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            
		},
		{
			sequelize,
			tableName: 'tb_aplicativo',
			timestamps: false,
			underscored: true
		}
    );
  
    return this;
  }
}

module.exports = Aplicativo