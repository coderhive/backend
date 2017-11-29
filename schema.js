export default `
  type User {
    id: Int!
    email: String!
    display_name: String!
    status: String!
    experience: Int!
    profile_picture: String!
    created_at: String!
    updated_at: String!
  }
  
  type Query {
    allUsers: [User!]!
    oneUser(email: String!): User
  }
  
  type Mutation {
    createUser(
        email: String!
        password: String!
        display_name: String!
    ): User
  }
    
`;