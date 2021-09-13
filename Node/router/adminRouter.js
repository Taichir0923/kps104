const express = require('express');
const router = express.Router();
const admin = require('../controller/adminController')

router.get('/admin', admin.adminMainController)

module.exports = router;