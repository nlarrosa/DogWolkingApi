
import { Request, Response } from "express";
import { DogWalkerService } from "../services/dogWalkerService";
import { PrismaClient } from "@prisma/client";

export class DogWalkerController {
  private dogWalkerService: DogWalkerService;

  constructor() {
    this.dogWalkerService = new DogWalkerService();
  }

  public createDogWalker = async (req: Request, res: Response) => {
    try {
      const dogWalker = await this.dogWalkerService.create(req.body);
      res.status(201).json(dogWalker);
    } catch (err) {
      // res.status(500).json({ error: err.message });
    }
  };

  public getDogWalkers = async (req: Request, res: Response) => {
    try {
      const dogWalkers = await this.dogWalkerService.getAll();
      res.status(200).json(dogWalkers);
    } catch (err) {
      // res.status(500).json({ error: err.message });
    }
  };
}
