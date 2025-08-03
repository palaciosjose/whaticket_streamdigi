import { QueryInterface } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.addIndex("ContactLists", ["name"], {
      name: "idx_contactlist_name"
    });
    await queryInterface.addIndex("ContactListItems", ["number"], {
      name: "idx_contactlistitem_number"
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.removeIndex("ContactLists", "idx_contactlist_name");
    await queryInterface.removeIndex("ContactListItems", "idx_contactlistitem_number");
  }
};

