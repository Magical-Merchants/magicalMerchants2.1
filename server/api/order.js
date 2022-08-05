const router = require('express').Router()
const Order = require('../db/models/Order')

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:orderid', async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.orderid)
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

module.exports = router
