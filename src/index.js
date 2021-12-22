import { GraphQLServer } from "graphql-yoga";
import { Query } from "./resolvers/Query.mjs";
import { Todo } from "./resolvers/Todo.mjs";
import { User } from "./resolvers/User.mjs";


// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = "src/schema/schema.graphql";

const resolvers = {
  Query: Query,
  Todo: Todo,
  User:User
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
