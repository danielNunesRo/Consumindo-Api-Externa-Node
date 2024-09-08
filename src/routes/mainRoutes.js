const MainController = require('../controllers/MainController');
const express = require('express');
const router = express.Router();

router.get('/frase', MainController.buscarFrase);

module.exports=router
