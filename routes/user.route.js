const userController = require('../controllers/user.controller');
const router = require('express').Router();

router.post('/',userController.addUser);

router.get('/:emailId',userController.getUsers);

router.get('/singleuser/:emailId', userController.getUser);

router.get('/id/:id', userController.getById);

router.put('/id/:id', userController.updateById);

router.delete('/id/:id',userController.deleteUserById);

module.exports = router;