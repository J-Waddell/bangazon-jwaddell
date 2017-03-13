'use strict'

const sqlite3 = require('sqlite3').verbose()

const DB = new sqlite3.Database('Bangazon.sqlite')
    // console.log(DB)

// const popCustomers = () => {

//     const { list } = require()
// }

// DB.run("CREATE TABLE IF NOT EXISTS customers (customerName TEXT, streetAddress TEXT, city TEXT, state TEXT, postalCode INT, phoneNumber INT)")

// DB.run("CREATE TABLE IF NOT EXISTS payment_options (paymentOptId INT, paymentOptName TEXT, paymentOptActNum INT)")

// DB.run("CREATE TABLE IF NOT EXISTS products (productId INT, productName TEXT, productPrice INT)")

// DB.run("CREATE TABLE IF NOT EXISTS orders (orderId INT, customerId TEXT, paymentOptId TEXT, paid TEXT)")

// DB.run("CREATE TABLE IF NOT EXISTS order_line_items (itemId INT, orderId INT, productId INT)")
