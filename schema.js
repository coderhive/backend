export default `
  type User {
    id: Int!
    email: String!
    display_name: String!
    summary: String
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
    activities: [Activity]!
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
    score: Int!
    component_picture: String
  }
  
  type Tag {
    id: Int!
    name: String!
    created_at: String!
    updated_at: String!
  }
    
  type TagRelationship {
    id: Int!
    user_id: Int!
    component_id: Int!
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
    profile_picture: String!
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
    component_picture: String
    title: String!
    description: String
    created_at: String!
    updated_at: String!
  }  
    
   type Follow {
    id: Int!
    follower: Int!
    followe2: Int!
    created_at: String!
    updated_at: String!
  }  
    
   type Activity {
    id: Int
    owner_id: Int
    type: String!
    component_id: Int
    user_id: Int
    component: Component
    user: User
    comment_id: Int
    comment: Comment
    created_at: String!
    updated_at: String!
  }  
  
  
  type Query {
    allUsers: [User]!
    oneUser(email: String!): User
    oneUserById(id: Int!): User
    loggedUser(id: Int!): User
    allComponents: [Component]!
    oneComponent(id: Int!): Component
    activities(userId: Int!): [Activity]!
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
        summary: String
        role: String
        experience: Int
        profile_picture: String
    ): User
  
    deleteUser(id: Int!): User
    
    
    createComponent(
        parent_component_id: Int
        clone_component_id: Int
        code: String
        css: String
        test: String
        language: String!
        framework: String!
        title: String!
        description: String
        privacy: String
        owner_user_id: Int!
        component_picture: String
    ): Component
    
    updateComponent(
        id: Int!
        parent_component_id: Int
        clone_component_id: Int
        code: String
        css: String
        test: String
        language: String
        framework: String
        title: String
        description: String
        privacy: String
        owner_user_id: Int
        component_picture: String
    ): Component
     
    deleteComponent(
        id: Int!
    ): Component
  
    createFan(
        user_id: Int!
        component_id: Int!
    ): Fan
      
    deleteFan(
        id: Int!
    ): Fan
    
    createVote(
        user_id: Int!
        component_id: Int!
        vote: Int!
    ): Vote
      
    deleteVote(
        user_id: Int!
        component_id: Int!
    ): Vote
        
    createTagRelationship(
        tag_id: Int!
        component_id: Int!
    ): TagRelationship
      
    deleteTagRelationship(
        component_id: Int!
        tag_id: Int!
    ): TagRelationship
            
    createFollow(
        follower: Int!
        followee: Int!
    ): Follow
      
    deleteFollow(
        follower: Int!
        followee: Int!
    ): Follow
    
    createComment(
        user_id: Int!
        component_id: Int!
        comment: String!
    ): Comment
    
    updateComment(
        id: Int!
        comment: String!
    ): Comment
      
    deleteComment(
        id: Int!
    ): Comment
            
  }  
`;