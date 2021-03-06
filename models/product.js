const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);


// const fs = require('fs');
// const path = require('path');

// const Cart = require('./cart');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data', 
//   'products.json'
// );

// const getProductsFromFile = callback => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       callback([]);
//     } else {
//       callback(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Product {
//   constructor(id, t, img, p, desc) {
//     this.id = id;
//     this.title = t;
//     this.imageUrl = img;
//     this.price = p;
//     this.description = desc;
//   }

//   save() {
//     getProductsFromFile(products => {
//       if (this.id) {
//         const existingProductIndex = products.findIndex(
//           prod => prod.id === this.id
//         );
//         const updatedProducts = [...products];
//         updatedProducts[existingProductIndex] = this;
//         fs.writeFile(p, JSON.stringify(updatedProducts), err => {
//           console.log(err);
//         });
//       } else {
//         this.id = Math.random().toString();
//         products.push(this);
//         fs.writeFile(p, JSON.stringify(products), err => {
//           console.log(err);
//         });
//       }
//     });
//   }

//   static deleteById(id) {
//     getProductsFromFile(products => {
//       const product = products.find(prod => prod.id === id);
//       const updatedProducts = products.filter(prod => prod.id !== id);
//       fs.writeFile(p, JSON.stringify(updatedProducts), err => {
//         if (!err) {
//           Cart.deleteProduct(id, product.price);
//         }
//       });
//     });
//   }

//   static findById(id, callback) {
//     getProductsFromFile(products => {
//       const product = products.find(p => p.id === id);
//       callback(product);
//     });
//   }

//   static fetchAll(callback) {
//     getProductsFromFile(callback);
//   }
// };