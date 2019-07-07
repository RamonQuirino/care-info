var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;

var userType = require('./userType');
var userModel = require('./user');
require('./user').default

exports.updateUser = {
    type: userType.userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve: async(root, args) =>{
        const UpdatedUser = await userModel.findByIdAndUpdate(args.id,args);
        if (!UpdatedUser) {
          throw new Error('Error')
        }
        return UpdatedUser;
    }
}