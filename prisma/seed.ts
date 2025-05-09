import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const data = {
  appUsers: [
    {
      id: "1dcd",
      username: "Damon",
      password: "pass",
    },
    {
      id: "0ea7",
      username: "Test",
      password: "pass",
    },
  ],
  workouts: [
    {
      id: "069a",
      workout: "Chest",
      userID: "1dcd",
      day: "Monday",
    },
    {
      id: "7272",
      workout: "Back",
      userID: "1dcd",
      day: "Tuesday",
    },
  ],
  movements: [
    {
      id: "e0c1",
      movement: "Benchpress",
      workoutID: "069a",
      sets: 6,
    },
    {
      id: "97a6",
      movement: "Pulldowns",
      workoutID: "7272",
      sets: 6,
    },
    {
      id: "25d7",
      movement: "Incline press",
      workoutID: "069a",
      sets: 5,
    },
  ],
  sets: [
    {
      id: "706c",
      movementID: "e0c1",
      setNumber: 1,
      weight: 95,
      date: "2025-03-01",
    },
    {
      id: "7ae5",
      movementID: "e0c1",
      setNumber: 2,
      weight: 96,
      date: "2025-03-01",
    },
    {
      id: "9229",
      movementID: "e0c1",
      setNumber: 3,
      weight: 23,
      date: "2025-03-01",
    },
    {
      id: "742e",
      movementID: "e0c1",
      setNumber: 4,
      weight: 34,
      date: "2025-03-01",
    },
    {
      id: "50c9",
      movementID: "e0c1",
      setNumber: 5,
      weight: 45,
      date: "2025-03-01",
    },
    {
      id: "5863",
      movementID: "e0c1",
      setNumber: 6,
      weight: 56,
      date: "2025-03-01",
    },
    {
      id: "0d5e",
      movementID: "e0c1",
      setNumber: 1,
      weight: 135,
      date: "2025-03-06",
    },
    {
      id: "0c9f",
      movementID: "e0c1",
      setNumber: 2,
      weight: 155,
      date: "2025-03-06",
    },
    {
      id: "5d24",
      movementID: "e0c1",
      setNumber: 3,
      weight: 185,
      date: "2025-03-06",
    },
    {
      id: "10da",
      movementID: "e0c1",
      setNumber: 4,
      weight: 205,
      date: "2025-03-06",
    },
    {
      id: "3cfb",
      movementID: "e0c1",
      setNumber: 5,
      weight: 225,
      date: "2025-03-06",
    },
    {
      id: "5ad3",
      movementID: "e0c1",
      setNumber: 6,
      weight: 235,
      date: "2025-03-06",
    },
    {
      id: "5a40",
      movementID: "e0c1",
      setNumber: 1,
      weight: 140,
      date: "2025-03-07",
    },
    {
      id: "c540",
      movementID: "e0c1",
      setNumber: 2,
      weight: 160,
      date: "2025-03-07",
    },
    {
      id: "e1c4",
      movementID: "e0c1",
      setNumber: 3,
      weight: 190,
      date: "2025-03-07",
    },
    {
      id: "76bb",
      movementID: "e0c1",
      setNumber: 4,
      weight: 210,
      date: "2025-03-07",
    },
    {
      id: "a2ed",
      movementID: "e0c1",
      setNumber: 5,
      weight: 230,
      date: "2025-03-07",
    },
    {
      id: "4fd1",
      movementID: "e0c1",
      setNumber: 6,
      weight: 240,
      date: "2025-03-07",
    },
    {
      id: "c2ba",
      movementID: "25d7",
      setNumber: 1,
      weight: 95,
      date: "2025-03-07",
    },
    {
      id: "a943",
      movementID: "25d7",
      setNumber: 2,
      weight: 95,
      date: "2025-03-07",
    },
    {
      id: "a9c7",
      movementID: "25d7",
      setNumber: 3,
      weight: 135,
      date: "2025-03-07",
    },
    {
      id: "640d",
      movementID: "25d7",
      setNumber: 4,
      weight: 135,
      date: "2025-03-07",
    },
    {
      id: "a7ee",
      movementID: "25d7",
      setNumber: 5,
      weight: 155,
      date: "2025-03-07",
    },
    {
      id: "a8d1",
      movementID: "e0c1",
      setNumber: 1,
      weight: 100,
      date: "2025-03-11",
    },
    {
      id: "d0a8",
      movementID: "e0c1",
      setNumber: 2,
      weight: 100,
      date: "2025-03-11",
    },
    {
      id: "5607",
      movementID: "e0c1",
      setNumber: 3,
      weight: 100,
      date: "2025-03-11",
    },
    {
      id: "4fa6",
      movementID: "e0c1",
      setNumber: 4,
      weight: 100,
      date: "2025-03-11",
    },
    {
      id: "09e5",
      movementID: "e0c1",
      setNumber: 5,
      weight: 100,
      date: "2025-03-11",
    },
    {
      id: "ff55",
      movementID: "e0c1",
      setNumber: 6,
      weight: 100,
      date: "2025-03-11",
    },
    {
      id: "cf66",
      movementID: "25d7",
      setNumber: 1,
      weight: 100,
      date: "2025-03-11",
    },
    {
      id: "5773",
      movementID: "25d7",
      setNumber: 2,
      weight: 100,
      date: "2025-03-11",
    },
    {
      id: "9e29",
      movementID: "25d7",
      setNumber: 3,
      weight: 100,
      date: "2025-03-11",
    },
    {
      id: "e28b",
      movementID: "25d7",
      setNumber: 4,
      weight: 100,
      date: "2025-03-11",
    },
    {
      id: "7469",
      movementID: "25d7",
      setNumber: 5,
      weight: 100,
      date: "2025-03-11",
    },
  ],
} as const;

async function main() {
  await prisma.$transaction([
    ...data.appUsers.map((u) =>
      prisma.user.upsert({
        where: { id: u.id },
        update: {},
        create: { id: u.id, username: u.username, password: u.password },
      })
    ),

    /* Workouts */
    prisma.workout.createMany({
      data: data.workouts.map((w) => ({
        id: w.id,
        workout: w.workout,
        day: w.day,
        userID: w.userID,
      })),
    }),

    /* Movements */
    prisma.movement.createMany({
      data: data.movements.map((m) => ({
        id: m.id,
        movement: m.movement,
        setsPlanned: m.sets,
        workoutId: m.workoutID,
      })),
    }),

    /* Sets */
    prisma.liftSet.createMany({
      data: data.sets.map((s) => ({
        id: s.id,
        setNumber: s.setNumber,
        weight: s.weight,
        date: new Date(s.date),
        movementId: s.movementID,
      })),
    }),
  ]);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
