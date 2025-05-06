import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function clearSeed() {
  await prisma.user.deleteMany({
    where: { id: { in: ["1dcd", "0ea7"] } },
  });
}

clearSeed()
  .then(() => console.log("Seed data removed"))
  .catch((e) => console.error("Failed to clear seed data:", e))
  .finally(async () => await prisma.$disconnect);
