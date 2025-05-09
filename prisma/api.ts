import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";

const prisma = new PrismaClient();
const router = Router();

// USERS
const userBody = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

router.post(
  "/users",
  validateRequest({ body: userBody }),
  async ({ body }, res) => {
    const user = await prisma.user.create({ data: body });
    res.status(201).json(user);
  }
);

router.delete("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await prisma.user.delete({ where: { id } });
    res.json(deleted);
  } catch (err: any) {
    if (err.code === "P2025") {
      return res.status(404).json({ message: "User not found" });
    }
    next(err);
  }
});

// WORKOUTS
const workoutBody = z.object({
  workout: z.string(),
  day: z.string(),
  userID: z.string(),
});

router.post(
  "/workouts",
  validateRequest({ body: workoutBody }),
  async ({ body }, res) => {
    const { userID, ...rest } = body;
    const workout = await prisma.workout.create({
      data: { ...rest, userID },
    });
    res.status(201).json(workout);
  }
);

router.get("/workouts", async (req, res) => {
  const workouts = await prisma.workout.findMany();
  res.json(workouts);
});

router.get("/workouts/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const workout = await prisma.workout.findUnique({
      where: { id },
      include: {
        movements: {
          include: { liftSets: true },
        },
      },
    });

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.json(workout);
  } catch (err) {
    next(err);
  }
});

// MOVEMENTS
const movementBody = z.object({
  movement: z.string(),
  sets: z.number().int().positive().optional(),
  setsPlanned: z.number().int().positive().optional(),
  workoutID: z.string(),
});

router.post(
  "/movements",
  validateRequest({ body: movementBody }),
  async ({ body }, res) => {
    const { workoutID, setsPlanned, sets, ...rest } = body;
    const count = setsPlanned ?? sets;
    const movement = await prisma.movement.create({
      data: { ...rest, setsPlanned: count, workoutId: workoutID },
    });
    res.status(201).json(movement);
  }
);

router.get("/movements", async (req, res, next) => {
  try {
    const { workoutID } = req.query;
    const where = workoutID ? { workoutId: String(workoutID) } : {};

    const rows = await prisma.movement.findMany({ where });

    const payload = rows.map((m) => ({
      ...m,
      sets: m.setsPlanned,
    }));

    res.json(payload);
  } catch (err) {
    next(err);
  }
});

// LIFT SETS
const setBody = z.object({
  movementID: z.string(),
  setNumber: z.number().int().positive(),
  weight: z.number().int().positive(),
  date: z.coerce.date(),
});

router.get("/sets", async (req, res, next) => {
  try {
    const { movementID } = req.query;
    const where = movementID ? { movementId: String(movementID) } : {};
    const sets = await prisma.liftSet.findMany({ where });
    res.json(sets);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/sets",
  validateRequest({ body: setBody }),
  async ({ body }, res) => {
    const { movementID, date, ...rest } = body;
    const liftSet = await prisma.liftSet.create({
      data: { ...rest, movementId: movementID, date: date },
    });
    res.status(201).json(liftSet);
  }
);

export default router;
