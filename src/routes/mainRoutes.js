const MainController = require('../controllers/MainController');
const express = require('express');
const router = express.Router();

router.get('/frase', MainController.buscarFrase);
router.get('/buscarCEP/:userCEP', MainController.buscarCEP);

module.exports=router
