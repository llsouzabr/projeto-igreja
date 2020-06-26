'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.createTable('visitantes', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        data:{
          type: Sequelize.DATE,
          allowNull: false,
  
          },
        pessoa_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'pessoas'
            },
            key:'id'
          }
        },
        grupos_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model:{
              tableName:'grupos'
            },
            key:'id'
          }
        },
        create_at: Sequelize.DATE,
        update_at: Sequelize.DATE,
        delete_at: Sequelize.DATE,
      });
 
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('visitantes');
   
  }
};
