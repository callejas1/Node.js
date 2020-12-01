const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To pass form-data into obj for POST method

// Render index.handlebars
app.get('/', (req, res) => {
  res.render('index');
});

// Match endpoint to action attr of the form el
app.post('/weather', (req, res) => {
  if (typeof req.body == 'undefined') {
    res.status(400);
    res.end('Invalid request');
    return;
  } else {
    const cityName = req.body.cityName;
    res.send(cityName); // send cityName entered back
  }
});

// get environment port or set to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
