const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/schema/schema');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

mongoose.connect(`mongodb://${keys.db_user}:${keys.db_password}@ds217092.mlab.com:17092/portfolio-dev`);

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

app.listen(4000, () => {
	console.log('now listening to port 4000');
});
