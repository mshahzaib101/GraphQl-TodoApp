const { GraphQLServer } = require("graphql-yoga");
const Resolvers = require("./resolvers");


//importing GraphQL schema and Resolvers
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: Resolvers.resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));

//querry example
// # Write your query or mutation here
// query {
//   feed {
//     id
//     url
//     # liked_by{
//     #   name
//     # }
//   }
// }
// # mutation{
// #   post(
// #     url:"shahzaib.com",
// #     description:"its me"
// #   ){
// #     id
// #     url
// #     description
// #   }
// # }
