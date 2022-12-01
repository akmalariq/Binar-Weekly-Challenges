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
    
    await queryInterface.bulkInsert('Users', [
      {
        name: 'akmal',
        email: 'akmal@email.com',
        password: 'akmal',
        role: 'superadmin',
        imgURL: 'https://randomuser.me/api/portraits/men/1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        createdBy: 'akmal',
        updatedBy: null,
        deletedBy: null
      },
      {
        name: 'ariq',
        email: 'ariq@email.com',
        password: 'ariq',
        role: 'admin',
        imgURL: 'https://randomuser.me/api/portraits/men/1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        createdBy: 'ariq',
        updatedBy: null,
        deletedBy: null
      },
      {
        name: 'abel',
        email: 'abel@email.com',
        password: 'abel',
        role: 'member',
        imgURL: 'https://randomuser.me/api/portraits/men/1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        createdBy: 'abel',
        updatedBy: null,
        deletedBy: null
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
