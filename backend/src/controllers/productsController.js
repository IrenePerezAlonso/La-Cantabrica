const debug = require('debug')('server:productsController');
const Product = require('../models/productModel');

function productsController() {
    async function getAll(req, res) {
        const products = await Product.find();
        res.json(products);
    }

    async function createOne(req, res) {
        const newProduct = new Product(req.body);
        debug(newProduct);
        try {
            await newProduct.save();
            res.json(newProduct);
        } catch (error) {
            debug(error);
            res.send(error);
        }
    }

    async function getById(req, res) {
        try {
            const productById = await Product.findById(
                req.params.productId,
            );
            res.json(productById);
        } catch (error) {
            debug(error);
            res.status(404);
            res.send(error);
        }
    }

    async function updateById(req, res) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.productId,
                req.body,
                { new: true },
            );
            res.json(updatedProduct)
        } catch (error) {
            debug(error);
            res.send(error);
        }
    }

    async function deleteById(req, res) {
        try {
            await Product.findByIdAndDelete(req.params.productId);
            res.status(204);
            res.json();
        } catch (error) {
            debug(error);
            res.send(error);  
        }
    }

    return {
        getAll,
        createOne,
        getById,
        updateById,
        deleteById,
      };
}

module.exports = productsController;