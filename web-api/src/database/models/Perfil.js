const Sequelize = require('sequelize');

class Perfil extends Sequelize.Model {
  static init(sequelize) {
    super.init(
		{
            nome: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            
		},
		{
			sequelize,
			tableName: 'tb_perfil',
			timestamps: false,
			underscored: true
		}
    );
  
    return this;
  }
}

module.exports = Perfil