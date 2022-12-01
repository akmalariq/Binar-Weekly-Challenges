'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Products', [
    {
      name: 'iphone',
      price: 21e6,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'laptop',
      price: 25e6,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'keyboard',
      price: 5e5,
      stock: 100,
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
