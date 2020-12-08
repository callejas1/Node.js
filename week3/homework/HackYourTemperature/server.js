'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');
app.use(express.json()); // recognize incoming req as JSON object
app.use(express.urlencoded({ extended: true })); // To pass form-data into obj for POST method

// Render index.handlebars
app.get('/', (req, res) => {
  res.render('index');
});

// Match endpoint to action attr of the form element
app.post('/weather', async (req, res) => {
  try {
    const API_KEY = require('./sources/keys.json').API_KEY;
    const cityName = await req.body.cityName;
    // get current weather from requested city ---- units=metric is to get temp in °C
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${API_KEY}`,
      )
      .then((response) => {
        // render index + pertaining weather data
        const weatherData = response.data.main.temp;
        res.render('index', { weatherText: weatherData, cityName: cityName });
      })
      .catch((e) => res.render('index', { weatherText: 'City not found!' }));
  } catch (e) {
    res.render('index', {
      weatherText:
        'Oops! Looks like there was a problem with your request. ' + e.message,
    });
  }
});

// Display error page if path is invalid
app.get('*', (req, res) => {
  res.render('404', { path: req.path });
});

// get environment port or set to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
