'use strict'

const sqlite3 = require('sqlite3').verbose()

const DB = new sqlite3.Database('Bangazon.sqlite')
    // console.log(DB)

DB.run("CREATE TABLE IF NOT EXISTS customers (customerName TEXT, streetAddress TEXT, city TEXT, state TEXT, postalCode INT, phoneNumber INT)")