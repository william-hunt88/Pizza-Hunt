const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');
const router = require('express').Router();

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);


module.exports = router;