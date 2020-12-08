const router = require('express').Router();
const users = require('../data/user.json');

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', (req, res) => {
  const user = users.find((u) => u._id === req.params.id);
  if (user) {
    res.send(user);
    return;
  }

  res.status(404).json({ message: 'Нет пользователя с таким id' });
});

module.exports = router;
