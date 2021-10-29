const Sequelize = require('sequelize');

class PerfilPessoa extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                idPessoa: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                idPerfil: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
            },
            {
                sequelize,
                tableName: 'tb_perfil_pessoa',
                timestamps: false,
                underscored: true
            }
            );
            
            return this;
        }

        static associate(models){
			const { Pessoa, Perfil } = models
			this.belongsTo( Pessoa, {
			   foreignKey: {
				   name:  'idPessoa'
			   },
			   as: '_pessoa',
               onDelete: 'cascade',
		   } ) 
           
			this.belongsTo( Perfil, {
			   foreignKey: {
				   name:  'idPerfil'
			   },
			   as: '_perfil',
               onDelete: 'cascade',
		   } ) 
	   }
    }
    
    module.exports = PerfilPessoa