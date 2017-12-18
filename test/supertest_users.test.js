"use strict";
const { expect } = require("chai");
const supertest = require("supertest");
const server = require("../index");

describe("Test query", () => {
	it("has correct getCharacters query", done => {
		const request = supertest.agent(server);
		// const query = {
		// 	query: `
		//     query {
		//       getCharacters {
		//         id
		//         name
		//         gender {
		//           name
		//         }
		//       }
		//     }
		//   `
		// };
		// const expected = {
		// 	getCharacters: [
		// 		{
		// 			id: "1",
		// 			name: "John Snow",
		// 			gender: {
		// 				name: "Male"
		// 			}
		// 		}
		// 	]
		// };

		request
			.post("/graphql")
			.set("Accept", "application/json")
			.send(query)
			.then(res => {
				expect(res.body.data).to.deep.equals(expected);
				done();
			})
			.catch(err => {
				done(err);
			});
	});
});
