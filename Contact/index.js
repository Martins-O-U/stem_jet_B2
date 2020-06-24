const express = require('express');
const referral = require('./contactController');

const router = express.Router();

router.post('/', referral.sendMail);

module.exports = router;
