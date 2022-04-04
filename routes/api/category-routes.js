const router = require('express').Router();
const { Category, Product } = require('../../models');
const { create } = require('../../models/Product');

// The `/api/categories` endpoint
// database = dbData
//Find All
router.get('/', (req, res) => {
  Category.findAll({
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  }).then(dbData => res.json(dbData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    attributes: ['id', 'category_name'],
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
    }]
  }).then(dbData => {
    if (!dbData) {
      res.status(400).json({ message: 'No category found' });
      return;
    }
    res.json(dbData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});


//create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbData => res.json(dbData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

  //update a category by its 'id' value
  router.put('/:id', (req, res) => {
    Category.update(res.body, {
      where: { id: res.params.id }
    })
    .then(dbData => {
      if(!dbData) {
        res.status(400).json({ message: 'No category found' });
        return;
      }
      res.json(dbData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
  

  //delete a category by its 'id' value
  router.delete('/:id', (req, res) => {
    Category.destroy({
      where: { id: req.params.id }
    })
    .then(dbData => {
      if(!dbData) {
        res.status(400).json({ message: 'No category found' });
        return;
      }
      res.json(dbData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });

  module.exports = router;
