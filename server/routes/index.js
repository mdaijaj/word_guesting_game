
const express= require('express')
const router=express()
const userController= require('../controller/index')


//company details:-
router.post('/api/createUserDetail', userController.createUserDetail)
router.put('/api/editUserDetail/:id', userController.editUserDetail)
router.get('/api/getUserDetail/:id', userController.getUserDetail)
router.get('/api/getUserList', userController.getUserList)



module.exports = router;