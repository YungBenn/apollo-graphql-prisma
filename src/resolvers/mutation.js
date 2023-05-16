import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Mutation = {
    createProduct: (parent, args) => {
        return prisma.product.create({
            data: {
                name: args.name,
                description: args.description,
                published: args.published,
                price: args.price,
            },
        });
    },
    updateProduct: (parent, args) => {
        return prisma.product.update({
            where: { id: String(args.id) },
            data: {
                name: args.name,
                description: args.description,
                published: args.published,
                price: args.price,
            },
        });
    },
    deleteProduct: (parent, args) => {
        return prisma.product.delete({
            where: { id: String(args.id) },
        });
    },
};

export default Mutation;
