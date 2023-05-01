'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
      await queryInterface.bulkInsert('products', 
      [
        {
          id: 1,
          name: 'Skol Lata 250ml',
          price: 2.20,
          url_image: 'https://live.staticflickr.com/65535/52862218693_6906e0836a_z.jpg'
      },
      {
          id: 2,
          name: 'Heineken 600ml',
          price: 7.50,
          url_image: 'https://live.staticflickr.com/65535/52861204077_b618e29836_w.jpg'
      },
      {
          id: 3,
          name: 'Antarctica Pilsen 300ml',
          price: 2.49,
          url_image: 'https://live.staticflickr.com/65535/52861783781_2602531eb8_n.jpg'
      },
      {
          id: 4,
          name: 'Brahma 600ml',
          price: 7.50,
          url_image: 'https://live.staticflickr.com/65535/52862218778_229037d7ff_n.jpg'
      },
      {
          id: 5,
          name: 'Skol 269ml',
          price: 2.19,
          url_image: 'https://live.staticflickr.com/65535/52861204097_53a62b316d_n.jpg'
      },
      {
          id: 6,
          name: 'Skol Beats Senses 313ml',
          price: 4.49,
          url_image: 'https://live.staticflickr.com/65535/52861783686_67297c32c1_n.jpg'
      },
      {
          id: 7,
          name: 'Becks 330ml',
          price: 4.99,
          url_image: 'https://live.staticflickr.com/65535/52861204167_381af5b540_n.jpg'
      },
      {
          id: 8,
          name: 'Brahma Duplo Malte 350ml',
          price: 2.79,
          url_image: 'https://live.staticflickr.com/65535/52861948969_4b6f5cd471_n.jpg'
      },
      {
          id: 9,
          name: 'Becks 600ml',
          price: 8.89,
          url_image: 'https://live.staticflickr.com/65535/52861948999_f0062cced2_n.jpg'
      },
      {
          id: 10,
          name: 'Skol Beats Senses 269ml',
          price: 3.57,
          url_image: 'https://live.staticflickr.com/65535/52861204097_53a62b316d_z.jpg'
      },
      {
          id: 11,
          name: 'Stella Artois 275ml',
          price: 3.49,
          url_image: 'https://live.staticflickr.com/65535/52861948929_cd483c246c_n.jpg'
      }
    ], {});
   
  },

  async down (queryInterface, _Sequelize) {

      await queryInterface.bulkDelete('products', null, {});
     
  }
};