const router = require('express').Router();
const userController = require('../controllers/userController')

router.post('/',userController.signup)
router.post('/sendOtpMessage',userController.sendOtpMessage)



module.exports = router