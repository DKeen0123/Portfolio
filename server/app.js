const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema/schema');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./mongoose/models/User');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);

mongoose.connection.once('open', () => {
	console.log('connected to db');
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
);

app.listen(5000, () => {
	console.log('now listening to port 5000');
});
