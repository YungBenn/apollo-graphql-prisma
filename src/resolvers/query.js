import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Query = {
    products: (parent, args) => {
        return prisma.product.findMany();
    },
    product: (parent, args) => {
        return prisma.product.findUnique({
            where: { id: String(args.id) },
        });
    },
};

export default Query;
