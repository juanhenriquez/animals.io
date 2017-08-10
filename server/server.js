const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// routes
const userRoutes = require('./users/user.route');

app.use((bodyParser.json()));

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});