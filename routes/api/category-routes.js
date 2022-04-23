const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// database = dbCategory
//Find All
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  }).then(dbCategory => res.json(dbCategory))
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
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
  }).then(dbCategory => {
    if (!dbCategory) {
      res.status(404).json({ message: 'No Category Associated With ID' });
      return;
    }
    res.json(dbCategory);
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
  .then(dbCategory => res.json(dbCategory))
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
    .then(dbCategory => {
      if(!dbCategory) {
        res.status(404).json({ message: 'No Category Associated With ID' });
        return;
      }
      res.json(dbCategory);
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
    .then(dbCategory => {
      if(!dbCategory) {
        res.status(404).json({ message: 'No Category Associated With ID' });
        return;
      }
      res.json(dbCategory);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });

  module.exports = router;
