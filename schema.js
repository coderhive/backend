export default `
  type User {
    id: Int!
    email: String!
    created_at: String!
    updated_at: String!
  }


  type Query {
    allUsers: [User!]!
  }  
   
`;