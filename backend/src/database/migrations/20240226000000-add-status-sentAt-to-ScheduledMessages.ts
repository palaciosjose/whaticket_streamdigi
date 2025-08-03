import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.addColumn("ScheduledMessages", "status", {
      type: DataTypes.STRING,
      defaultValue: "PENDENTE"
    });
    await queryInterface.addColumn("ScheduledMessages", "sentAt", {
      type: DataTypes.DATE,
      allowNull: true
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.removeColumn("ScheduledMessages", "sentAt");
    await queryInterface.removeColumn("ScheduledMessages", "status");
  }
};
