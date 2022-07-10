import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then((URL) => {
  console.log(`Server is Running at ${URL.port}`);
});
