const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const Mongoose = require("mongoose");
const userSchema = require('./models/user/userSchema').UserSchema;

const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");

var app = Express();

Mongoose.connect("mongodb://localhost/care-info");

app.use("/graphql", ExpressGraphQL({
    schema: userSchema,
    graphiql: true,
    rootValue: global,
}));

app.listen(3000, () => {
    console.log("Listening at :3000...");
});