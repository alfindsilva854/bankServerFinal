const express=require('express')
const { register,login, getBalance, moneyTransfer, accountStatement} = require('../controllers/logic')


//router object
const router=new express.Router()


// create ac-signup
router.post('/bankuser/create_acc',register)

//login
router.post('/bankuser/login',login)


//check balance
router.get('/bankuser/balance/:acno',getBalance)

//money transfer
router.post('/bankuser/money-transfer',moneyTransfer)

//account statement
router.get('/bankuser/account-statement/:acno',accountStatement)

//profile view

// delete account

//export router
module.exports=router