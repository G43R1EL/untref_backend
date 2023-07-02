// Router
const router = require('express').Router();

// Data manager
const {
  findAll, findById, addProduct, updateProduct, deleteProduct,
} = require('../data/data.manager');

// ROUTES
// Get all products
router.get('/products', (req, res) => {
  findAll()
    .then((products) => res.status(200).send({ status: 200, message: 'Success', payload: products }))
    .catch((err) => res.status(400).send({ status: 400, message: err.message }));
});

// Get one product
router.get('/products/:id', (req, res) => {
  findById(req.params.id)
    .then((product) => res.status(200).send({ status: 200, message: 'Success', payload: product }))
    .catch((err) => res.status(400).send({ status: 400, message: err.message }));
});

// Create product
router.post('/products', (req, res) => {
  const {
    name, description, price, manufacturer, category,
  } = req.body;
  addProduct({
    name, description, price, manufacturer, category,
  })
    .then((product) => res.status(201).send({ status: 201, message: 'Success', payload: product }))
    .catch((err) => res.status(400).send({ status: 400, message: err.message }));
});

// Update product
router.put('/products/:id', (req, res) => {
  const {
    name, description, price, manufacturer, category,
  } = req.body;
  updateProduct(req.params.id, {
    name, description, price, manufacturer, category,
  })
    .then((product) => res.status(200).send({ status: 200, message: 'Success', payload: product }))
    .catch((err) => res.status(400).send({ status: 400, message: err.message }));
});

// Delete product
router.delete('/products/:id', (req, res) => {
  deleteProduct(req.params.id)
    .then((data) => res.status(200).send({ status: 200, message: 'Success', payload: { id: data } }))
    .catch((err) => res.status(400).send({ status: 400, message: err.message }));
});

// 404 Not found
router.get('*', (req, res) => {
  res.status(404).send({ status: 404, message: 'Not found' });
});

// Export router
module.exports = router;
