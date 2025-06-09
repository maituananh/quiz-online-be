import { createQuestion, findAllQuestion } from '@controllers/index';
import { Router } from 'express';

const questionsRouter = Router();

questionsRouter.post('/', createQuestion);
questionsRouter.get('/all', findAllQuestion);

export default questionsRouter;
