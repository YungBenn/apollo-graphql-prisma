// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//     const john = await prisma.user.upsert({
//         where: { email: 'johndoe@gmail.com' },
//         update: {},
//         create: {
//             email: 'johndoe@gmail.com',
//             name: 'John',
//             product: {
//                 create: {
//                     name: 'Logitech G Pro X Superlight',
//                     description:
//                         'Less than 63 grams. Advanced low-latency LIGHTSPEED wireless. Sub-micron precision with HERO 25K sensor. Remove all obstacles with our lightest and fastest PRO mouse ever.',
//                     published: true,
//                     price: 12.99,
//                 },
//             },
//         },
//     });
    
//     const ahmad = await prisma.user.upsert({
//         where: { email: 'ahmad@gmail.com' },
//         update: {},
//         create: {
//             email: 'ahmad@gmail.com',
//             name: 'ahmad',
//             product: {
//                 create: {
//                     name: 'Victus by HP Laptop 16-e1090AX',
//                     description: 'Bagus bgt pokoknya',
//                     published: false,
//                     price: 1200,
//                 },
//             },
//         },
//     });
//     console.log({ john, ahmad });
// }

// main()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });
