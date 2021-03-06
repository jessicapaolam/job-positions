const { GraphQLServer } = require('graphql-yoga');
const path              = require('path');
const resolvers         = require('./resolvers')

const PORT = 8080;

const server = new GraphQLServer({
   typeDefs: path.resolve(__dirname, 'schema.graphql'),
   resolvers
});

server.start({port: PORT});