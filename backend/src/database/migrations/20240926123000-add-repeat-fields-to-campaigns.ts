import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.addColumn("Campaigns", "repeatInterval", {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }),
      queryInterface.addColumn("Campaigns", "repeatLimit", {
        type: DataTypes.INTEGER,
        defaultValue: 0
      })
    ]);
  },

  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn("Campaigns", "repeatInterval"),
      queryInterface.removeColumn("Campaigns", "repeatLimit")
    ]);
  }
};
