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
    votes: [Vote]!
    comments: [Comment]!
    fanOf: [Fan]!
    followers: [User]!
    whoIFollow: [User]!
  }
  
   type Component {
    id: Int!
    parent_component_id: Int
    clone_component_id: Int
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
    tags: [Tag]!
    votes: [Vote]!
    comments: [Comment]!
    fans: [Fan]!
    owner_user_id: Int!
    owner: User!
    myParent: Component
    myChildren: [Component]!
    myCloneSource: Component
    myClones: [Component]!
  }
  
  type Tag {
    id: Int!
    name: String!
    created_at: String!
    updated_at: String!
  }
  
   type Vote {
    id: Int!
    user_id: Int!
    display_name: String!
    component_id: Int!
    title: String!
    description: String
    vote: Int!
    created_at: String!
    updated_at: String!
  }
  
   type Comment {
    id: Int!
    user_id: Int!
    display_name: String!
    component_id: Int!
    title: String!
    description: String
    comment: String!
    created_at: String!
    updated_at: String!
  }  
  
   type Fan {
    id: Int!
    user_id: Int!
    display_name: String!
    component_id: Int!
    title: String!
    description: String
    created_at: String!
    updated_at: String!
  }
  
  type Query {
    allUsers: [User!]!
    oneUser(email: String!): User
    oneComponent(id: Int!): Component
  }
  
  type Mutation {
    createUser(
        email: String!
        password: String!
        display_name: String!
    ): User
    updateUser(
        id: Int!
        email: String
        password: String
        display_name: String
        status: String
        role: String
        experience: Int
        profile_picture: String
    ): User
    deleteUser(id: Int!): User
  }  
`;