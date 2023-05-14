import Query from './query.js';
import Mutation from './mutation.js';

const Product = {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    description: (parent) => parent.description,
    published: (parent) => parent.published,
    price: (parent) => parent.price,
};

const resolvers = {
    Product,
    Query,
    Mutation,
};

export default resolvers;
