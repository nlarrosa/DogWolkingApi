
import { Router } from "express";
import { DogWalkerController } from "../controllers/dogWalkerController";

const dogWalkerRoutes = (): Router => {
  const router = Router();
  const dogWalkerController = new DogWalkerController();

  router.post("/", dogWalkerController.createDogWalker);
  router.get("/", dogWalkerController.getDogWalkers);

  return router;
};

export default dogWalkerRoutes;
