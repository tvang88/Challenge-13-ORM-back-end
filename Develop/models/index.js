// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(catergory, {
  foreignKey:'catergory_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Catergory.hasMany(Product, {
  foreignKey:'category_id',
  onDelete: 'cascade'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'productTag_products',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany (Product, {
  through:ProductTag,
  as: 'productTag_products',
  foreignKey: tag_id
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
