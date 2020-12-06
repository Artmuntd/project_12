const express = require('express');
const path = require('path');
const cardsUserRouter = require('./routes/cards');
const userRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

app.use('/', express.static(path.join(__dirname, 'public/html')));
app.use('/users', userRouter);
app.use('/cards', cardsUserRouter);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
