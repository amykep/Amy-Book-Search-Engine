// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
}

input saveBookInput {
    authors:[String]
    description: String
    title: String
    bookId: String
    image: String
    link:  String
}

type Book {
    _id: ID
    authors:[String]
    description: String
    title: String
    bookId: String
    image: String
    link:  String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(body: saveBookInput): User
    removeBook(bookId: String!): User
  }
`;
// export the typeDefs
module.exports = typeDefs;
