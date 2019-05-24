const {GraphQLServer} = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client')
const resolvers = require('./resolvers')
const expressServer = require('./utils/express-server')
const {importSchema} = require('graphql-import')
const getClaims = require("./verify")
const {rule, shield} = require("graphql-shield");

// const isAuthenticated = rule()(async (parent, args, ctx, info) => {
//   console.log(ctx.claims)
//   return ctx.claims !== null
// })

// const permissions = shield({
//   Query: {
//     components: isAuthenticated
//   },
//   Mutation: {
//
//     }
// })

const server = new GraphQLServer({
    typeDefs: importSchema('schema.graphql'),
    resolvers,
    expressServer,
    context: req => ({
      ...req,
      prisma,
      // claims: getClaims(req)
    }),
  // middlewares: [permissions]
  })
  server.start(() => console.log('prisma is running on http://localhost:4000'))
