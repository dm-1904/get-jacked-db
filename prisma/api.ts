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

// MOVEMENTS
const movementBody = z.object({
  movement: z.string(),
  sets: z.number().int().positive(),
  workoutID: z.string(),
});

router.post(
  "/movements",
  validateRequest({ body: movementBody }),
  async ({ body }, res) => {
    const { workoutID, sets, ...rest } = body;
    const movement = await prisma.movement.create({
      data: { ...rest, setsPlanned: sets, workoutId: workoutID },
    });
    res.status(201).json(movement);
  }
);

// LIFT SETS
const setBody = z.object({
  movementID: z.string(),
  setNumber: z.number().int().positive(),
  weight: z.number().int().positive(),
  date: z.string().datetime({ offset: false }),
});

router.post(
  "/sets",
  validateRequest({ body: setBody }),
  async ({ body }, res) => {
    const { movementID, date, ...rest } = body;
    const liftSet = await prisma.liftSet.create({
      data: { ...rest, movementId: movementID, date: new Date(date) },
    });
    res.status(201).json(liftSet);
  }
);

export default router;
