import express from "express";
import bodyParser from "body-parser";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

const PORT = 3000;
const db = require("./knex");

import typeDefs from "./schema";
import resolvers from "./resolvers";

const app = express();
const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

app.use(
	"/graphiql",
	graphiqlExpress({
		endpointURL: "/graphql",
		db
	})
);

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema, context: { db } }));

app.listen(PORT);
console.log("Listening on port ", PORT);
