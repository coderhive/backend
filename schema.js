export default `
  type User {
    id: Int!
    email: String!
    created_at: String!
    display_name: String!
    status: String!
    experience: Int!
    updated_at: String!
  }
  
  type Query {
    allUsers: [User!]!
    oneUser(email: String!): User
  }
    
`;





  // type Component {
  //   id
  //   name
  //   code
  // }
