import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Prisma Client", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should fetch users without errors", async () => {
    const users = await prisma.user.findMany();
    expect(Array.isArray(users)).toBe(true);
    console.log("Users:", users); // Optional: Logs the fetched users
  });
});
