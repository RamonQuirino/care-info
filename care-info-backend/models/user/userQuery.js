var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
//import user model 
var userModel = require('./user');
//import GraphQL UserType
var userType = require('./userType').userType;
// Query
exports.UserQuery = new GraphQLObjectType({
  name: 'Query',
  fields:  ()=> {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve:  async ()=> {
          const users = await userModel.find()
          if (!users) {
            throw new Error('error while fetching data')
          }
          return users
        }
      }
    }
  }
})