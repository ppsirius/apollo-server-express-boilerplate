import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import config from '../config'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': 'dark',
    },
    tabs: [
      {
        // query: defaultQuery,
      },
    ],
  },
})

const app = express()

server.applyMiddleware({app})

app.listen({port: config.port}, () =>
  console.log(`🚀 Server ready at:\nhttp://${config.host}:${config.port}${server.graphqlPath}`),
)
