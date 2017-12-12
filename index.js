import express from "express";
import bodyParser from "body-parser";
import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
const cors = require("cors");
const { JWT_KEY } = require("./env");
const jwt = require("express-jwt");
const authenticationController = require("./lib/instances/authenticationController");
const PORT = 3000;
const fs = require("fs");

import typeDefs from "./schema";
import resolvers from "./resolvers";
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

app.get("/component", function(req, res, next) {
	let html = `<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <title>test</title>
	  </head>
	  <body>
	    <div id="root"></div>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>
	    <script type="text/babel">
	    class Greeting extends React.Component {
		render() {
			return (
				<p style={{ "background-color": "white" }}>
					Hello world
					<div>THIS IS A DIV</div>
				</p>
			);
		}
	}
	ReactDOM.render(<Greeting />, document.getElementById("root"));
	</script>
	  </body>
	</html>`;
	res.send(html);
});

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
