const express = require('express');
const router = express.Router();
const Product = require("../models/Product");

const getAll = async (req, res) => {
    try {
      const product = await Product.findAll();
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch product.' });
    }
  };

const createProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ message: "server error product has not been created" });
    }
  };

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await Product.update(req.body, { where: { id: id } });
        res.status(200).json({ message: "Product updated !" });
      } catch (err) {
        res.status(500).json({ message: "server error the product has not been updated !" });
      }
    };

const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
      const product = await Product.destroy({ where: { id: id } });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: "Le produit n'a pas été trouvé" });
    }
  };
    
  module.exports = {
    getAll,
    createProduct,
    updateProduct,
    deleteProduct
  }