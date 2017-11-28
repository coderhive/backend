import express from 'express';
import bodyParser from 'body-parser';
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools';
const PORT = 3000;

import typeDefs from './schema'
import resolvers from './resolvers'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


const app = express();

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({schema: schema}));

app.listen(PORT);

console.log('Listening on port ', PORT);