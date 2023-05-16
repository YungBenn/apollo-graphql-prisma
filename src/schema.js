import gql from 'graphql-tag';

const typeDefs = gql`
    type Product {
        id: ID!
        name: String!
        description: String!
        published: Boolean
        price: Float
        createdAt: String
        updatedAt: String
    }

    input ProductCreateInput {
        name: String!
        description: String!
        published: Boolean
        price: Float
    }

    type Query {
        products: [Product!]
        product(id: ID!): Product
    }

    type Mutation {
        createProduct(
            name: String!
            description: String!
            published: Boolean
            price: Float
        ): Product!
        updateProduct(
            id: ID!
            name: String
            description: String
            published: Boolean
            price: Float
        ): Product
        deleteProduct(
            id: ID!
        ): Product
    }
`;

export default typeDefs;
