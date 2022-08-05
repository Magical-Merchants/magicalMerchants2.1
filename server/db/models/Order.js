const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'pending',
    validate: {
      isIn: [['pending', 'processing', 'shipped', 'cancelled', 'complete']],
    },
  },
  //date and time of the order
  creditCard: {
    type: Sequelize.INTEGER,
    validate: {
      isCreditCard: true,
    },
  },
})

module.exports = Order
