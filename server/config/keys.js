if (process.env.NODE_ENV === 'production') {
	module.exports = require('./environments/prod');
} else if (process.env.NODE_ENV === 'test') {
	module.exports = require('./environments/test');
} else {
	module.exports = require('./environments/dev');
}
