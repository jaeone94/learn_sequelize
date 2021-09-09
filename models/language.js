const Sequelize = require('sequelize');

module.exports = class Language extends Sequelize.Model {    
    static init(sequelize, DataTypes) {
        return super.init({
            name : {
                type : DataTypes.STRING(64),
                allowNull : false,
            },
            wiki_url : {
                type : DataTypes.STRING(64),
                allowNull : true,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored : true,
            modelName : 'Language',
            tableName : 'languages',
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.Language.hasMany(db.Book, { foreignKey : 'language_id', sourceKey : 'id'});
    }
}
