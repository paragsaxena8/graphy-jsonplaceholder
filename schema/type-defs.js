import { gql } from "apollo-server";

// Type defination schema for graphQL for various end-points
export const typeDefs = gql`
  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  type Geo {
    lat: String
    lng: String
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String
    phone: String
    website: String
    company: Company
    address: Address
  }

  type Post {
    userId: Int
    id: ID!
    title: String
    body: String
  }

  type Comment {
    postId: Int
    id: ID!
    name: String!
    email: String
    body: String
  }

  type Album {
    userId: Int
    id: ID!
    title: String!
  }

  type Photo {
    albumId: Int
    id: ID!
    title: String!
    url: String
    thumbnailUrl: String
  }

  type Todo {
    userId: Int
    id: ID!
    title: String!
    completed: Boolean!
  }

  # All supported Queries to GET
  type Query {
    users: [User!]!
    user(id: ID!): User!
    posts: [Post!]!
    post(id: ID!): Post!
    comments: [Comment!]!
    comment(id: ID!): Comment!
    albums: [Album!]!
    album(id: ID!): Album!
    photos: [Photo!]!
    photo(id: ID!): Photo!
    todos: [Todo!]!
    todo(id: ID!): Todo!
  }

  input createUserInput {
    name: String!
    username: String!
    email: String!
    phone: String
  }

  # All Supported mutation queries
  type Mutation {
    createUser(input: createUserInput): User!
  }
`;

// Example queries to test the API, use apollo-graphQL studio
const ExampleQueries = gql`
  query getUsers {
    users {
      id
      name
      email
      username
      website
      phone
      company {
        name
      }
      address {
        city
      }
    }
  }

  query getPosts {
    posts {
      id
      title
      body
    }
  }

  query getPost($postId: ID!) {
    post(id: $postId) {
      id
      title
      body
    }
  }

  query getAlbums {
    albums {
      id
      title
      userId
    }
  }

  query getAlbum($albumId: ID!) {
    album(id: $albumId) {
      id
      title
      userId
    }
  }

  query getPhotos {
    photos {
      id
      title
      thumbnailUrl
      albumId
    }
  }

  query getPhoto($photoId: ID!) {
    photo(id: $photoId) {
      title
      thumbnailUrl
    }
  }

  query getComments {
    comments {
      body
      name
      postId
    }
  }

  query getTodos {
    todos {
      title
      completed
      id
    }
  }

  query getUser($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
      username
      website
      phone
      company {
        name
      }
      address {
        city
      }
    }
  }

  mutation CreateNewUser($createUserInput: createUserInput) {
    createUser(input: $createUserInput) {
      id
      name
      email
      username
    }
  }
`;
