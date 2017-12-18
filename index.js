const express = require("express");
const bodyParser = require("body-parser");
const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const cors = require("cors");
const { JWT_KEY } = require("./env");
const jwt = require("express-jwt");
const authenticationController = require("./lib/instances/authenticationController");
const PORT = 3000;
const renderController = require("./lib/instances/renderController");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const app = express();
const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

app.use(cors());
app.use(bodyParser.json());

app.use(
	jwt({
		secret: JWT_KEY,
		requestProperty: "jwt.payload",
		credentialsRequired: false,
		audience: "coder-hive",
		issuer: "coder-hive"
	})
);

app.use((req, res, next) => {
	let authUserId = req.jwt ? req.jwt.payload.sub : undefined;
	if (typeof authUserId === "number" && authUserId > 0) {
		req.authenticatedUserId = authUserId;
	} else {
		req.authenticatedUserId = null;
	}
	next();
});

app.get("/component/:id", renderController.generateHTML);

app.post("/token", authenticationController.token);

app.all("/token", (req, res, next) => {
	res.status(405).send("Method Not Allowed");
});

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.use(
	"/graphql",
	graphqlExpress(request => ({
		schema,
		context: { authenticatedUserId: request.authenticatedUserId }
	}))
);

app.listen(PORT);
console.log("Listening on port ", PORT);
