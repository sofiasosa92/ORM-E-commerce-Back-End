///??? check this 

// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: '',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: '',
  onDelete: 'CASCADE', ///??? check this 
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: '',
});
// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(ProductTag, {
  foreignKey: '',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
