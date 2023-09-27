const express=require('express');
const router=express.Router();
const Controller=require('./controller')

router.get('/customers', Controller.getCustomers);
router.get('/customers/:id',Controller.getOrdersByCustomer);
router.get('/summary',Controller.getSummary);





module.exports=router;

