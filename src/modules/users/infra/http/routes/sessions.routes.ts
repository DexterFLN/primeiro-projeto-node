import { Router } from 'express';

import SesseionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sesseionsController = new SesseionsController();

sessionsRouter.post('/', sesseionsController.create);

export default sessionsRouter;
