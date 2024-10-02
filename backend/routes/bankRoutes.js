const bankController = require('../controller/bankController');

const express = require('express');
const router = express.Router();
const { getBankBalance } = require('../controller/bankController');

// Route pour obtenir le solde bancaire
router.get('/balance', getBankBalance);

module.exports = router;