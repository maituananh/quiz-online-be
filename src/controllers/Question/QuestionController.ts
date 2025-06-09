import { Request, Response } from 'express';

export const createQuestion = (req: Request, res: Response) => {
  try {
    const question = req.body;
    // const newQuestion = await Question.create(question);
    res.status(201).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const findAllQuestion = (req: Request, res: Response) => {
  res.status(200).json([]);
};
