const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
let db = mongoose.connection;
db.on('connected', () => {
	console.log('mongoose connected 👍');
	app.listen(3000, () => {
		console.log('running on http://localhost:3000 🏃‍');
	});
});

db.on('error', err => {
	console.log(err);
});

const homeRoutes = require('./routes/homeRoutes');
app.use(homeRoutes);
