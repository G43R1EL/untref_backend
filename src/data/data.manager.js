// Environment variables
const dotenv = require('dotenv');

dotenv.config();

// File system
const fs = require('fs');
const path = require('path');

// Database name
const DATABASENAME = path.join(__dirname, process.env.DATABASENAME);

// Read file function
function read() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(path.join(DATABASENAME)), 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Error reading data file'));
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

// Write file function
function write(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.resolve(path.join(DATABASENAME)), JSON.stringify(data, null, 4), 'utf8', (err) => {
      if (err) {
        reject(new Error('Error writing data file'));
      } else {
        resolve();
      }
    });
  });
}

// Check product helper function
function productCheck(product) {
  if (!product.name || !product.description || !product.price
      || !product.manufacturer || !product.category) {
    return false;
  }
  return true;
}

// Generate id helper function (not the best way to do it)
function generateId() {
  return Math.floor(Math.random(Date.now()) * 10000000000000);
}

// Get all products
async function findAll() {
  const products = await read();
  return products;
}

// Get one product by id
async function findById(id) {
  if (!id) { throw new Error('Id is not valid'); }
  const products = await read();
  const product = products.find((item) => item.id === Number(id));
  if (!product) { throw new Error('Product not found'); }
  return product;
}

// Create product
async function addProduct(product) {
  if (!productCheck(product)) { throw new Error('Product is not valid'); }
  const products = await read();
  const newProduct = { id: generateId(), ...product };
  products.push(newProduct);
  await write(products);
  return newProduct;
}

// Update product by id
async function updateProduct(id, product) {
  if (!id) { throw new Error('Id is not valid'); }
  if (!productCheck(product)) { throw new Error('Product is not valid'); }
  const products = await read();
  const index = products.findIndex((item) => item.id === Number(id));
  if (index === -1) { throw new Error('Product not found'); }
  const updatedProduct = { id: Number(id), ...product };
  products[index] = updatedProduct;
  await write(products);
  return updatedProduct;
}

// Delete product by id
async function deleteProduct(id) {
  if (!id) { throw new Error('Id is not valid'); }
  const products = await read();
  const index = products.findIndex((product) => product.id === Number(id));
  if (index === -1) { throw new Error('Product not found'); }
  products.splice(index, 1);
  await write(products);
  return id;
}

// Export functions
module.exports = {
  findAll,
  findById,
  addProduct,
  updateProduct,
  deleteProduct,
};
