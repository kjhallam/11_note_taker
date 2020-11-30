// DEPENDENCIES
const express = require('express');
 
// SET UP EXPRESS APP
const app = express();
const PORT = process.env.PORT || 3001;;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const api_routes = require('./routes/api_routes');
app.use(api_routes);

const html_routes = require('./routes/html_routes');
app.use(html_routes);

 app.listen(PORT, () => {
     console.log(`Server started on ${PORT}`);
 });