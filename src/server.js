import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './resolvers/index.js';
import typeDefs from './schema.js';

async function start() {
    const server = new ApolloServer({ resolvers, typeDefs });
    const port = process.env.PORT || 3000;

    const { url } = await startStandaloneServer(server, {
        listen: { port: port },
    });

    console.log(`🚀 Server ready at: ${url}`);
}

start();
