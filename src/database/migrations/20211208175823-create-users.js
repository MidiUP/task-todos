'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {

        await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')

        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()'),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            },


        });

    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.dropTable('users');

    }
};