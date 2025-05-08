import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
  await prisma.user.deleteMany();
  console.log("All users deleted.");
  await prisma.$disconnect();
})();
