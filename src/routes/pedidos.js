const express = require("express");
const pedidoController = require("../controllers/pedidoControllers");
const router = express.Router();

// Corrigido: chamada correta das funções do controller
router.get("/", (req, res) => pedidoController.getAllPedidos(req, res));
router.post("/", (req, res) => pedidoController.createPedido(req, res));

module.exports = router;
