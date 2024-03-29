const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const catergoryData = await Catergory.findAll({
      include: [{model: Product}]
    });
    res.status(200),json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catergoryData = await Catergory.findByPk(req.params.id, {
      include: [{model:Product}]
    });
    if (!catergoryData){
      res.status(404).json({message: 'There were no Catergory located with this ID'});
      return;
    }
    res.status(200).json(catergoryData);
  }catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try{
    const catergoryData = await Catergory.create(req.body);
    res.status(200).json(catergoryData);
  }catch (err){
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
