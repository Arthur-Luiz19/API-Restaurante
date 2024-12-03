const pedido = require('../models/pedidos');

class pedidoController{
     // Método para obter todos os pedidos e renderizar a view
     async getAllPedidos(req, res) {
        try {
        const pedidos = await pedido.findAll();
        res.render('pedidos/index', { title: 'Pedidos', pedidos
       });
        } catch (err) {
            res.status(500).json({ 
                error: err.message,
                stack: err.stack // Inclui o stack trace
            });
        }
    }
     async createPedido(req, res){
        const {cliente, itens, total} = req.body;
        try{
            await pedido.create({cliente, itens, total})
            res.redirect('/pedidos')
        }
        catch (err) {
            res.status(500).json({ 
                error: err.message,
                stack: err.stack // Inclui o stack trace
            });
        }
    }
}

module.exports = new pedidoController();

