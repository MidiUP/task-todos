import Sequelize, { Model } from "sequelize";

class Todo extends Model {
    static init(sequelize) {
        super.init({
            description: Sequelize.STRING,
            title: Sequelize.STRING,

        }, {
            sequelize
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreingKey: 'user_id', as: 'user' });
    }
}

export default Todo;