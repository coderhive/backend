export default `
  type User {
    id: Int!
    email: String!
    display_name: String!
    status: String!
    role: String!
    experience: Int!
    profile_picture: String
    created_at: String!
    updated_at: String!
    components: [Component]
  }
  
   type Component {
    id: Int!
    parent_component_id: Int
    clone_component_id: Int
    user_id: Int!
    code: String
    css: String
    test: String
    language: String!
    framework: String!
    title: String
    description: String
    privacy: String
    status: String!
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