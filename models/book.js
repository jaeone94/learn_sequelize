const Sequelize = require('sequelize');

module.exports = class Book extends Sequelize.Model {    
    static init(sequelize, DataTypes) {
        return super.init({
            name : {
                type : DataTypes.STRING(64),
                allowNull : false,
            },
            writter : {
                type : DataTypes.STRING(64),
                allowNull : false,
            },
            price : {
                type : Sequelize.INTEGER,
                allowNull : false,
                defaultValue : 0, //미지정시 기본값 0
            }
            // 외래키는 여기서 정의하지 않고. associate 함수를 통해 만든다. 
        }, {
            sequelize,
            timestamps: false,
            underscored : true,
            modelName : 'Book',
            tableName : 'books',
            paranoid : false,
            charset : 'utf8',
            collate : 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.Book.belongsTo(db.Language, { foreignKey : 'language_id', targetKey : 'id', onDelete : 'cascade'});
    }
}
