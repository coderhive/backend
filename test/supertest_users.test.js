// "use strict";
// const { expect } = require("chai");
// const supertest = require("supertest");
// const server = require("../index");
//
// describe("Test query", () => {
// 	it("has correct getUsers query", done => {
// 		const request = supertest.agent(server);
// 		const query = {
// 			query: `
// 		    query {
// 		      allUsers {
// 		        id
// 		        }
// 		      }
// 		    }
// 		  `
// 		};
// 		const expected = {
// 			allUsers: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
// 		};
//
// 		request
// 			.post("/graphql")
// 			.set("Accept", "application/json")
// 			.send(query)
// 			.then(res => {
// 				console.log(res.body);
// 				expect(res.body.data).to.deep.equals(expected);
// 				done();
// 			})
// 			.catch(err => {
// 				done(err);
// 			});
// 	});
// });

// const { tester } = require("../../main");
//
// describe("SWAPI", () => {
// 	let SwapiTest = tester({
// 		url: "http://graphql-swapi.parseapp.com"
// 	});
//
// 	describe("Successfully getting the name of Person #1", () => {
// 		const response = SwapiTest("{ person(personID: 1) { name } }");
//
// 		it("Returns success", () => {
// 			return response.should.eventually.have.property("success").equal(true);
// 		});
// 		it("Returns the correct Status code", () => {
// 			return response.should.eventually.have.property("status").equal(200);
// 		});
// 		it("Returns the correct name", () => {
// 			return response.should.eventually.have.deep
// 				.property("data.person.name")
// 				.equal("Luke Skywalker");
// 		});
// 	});
// });
