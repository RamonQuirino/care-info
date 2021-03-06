var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

exports.userType = new GraphQLObjectType({
    name: 'user',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString }
        }

    }
});