import { home } from "../controllers/homeController.js";
import { Router } from 'express';

const router = Router();

router.get('/', home);

export default router;