const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLID } = graphql;

const CryptoCurrencyType = new GraphQLObjectType({
	name: 'CryptoCurrency',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		amount: { type: GraphQLFloat }
	})
});
