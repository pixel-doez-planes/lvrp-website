import { Router, type IRouter } from "express";
import healthRouter from "./health";
import statsRouter from "./stats";
import directorsRouter from "./directors";

const router: IRouter = Router();

router.use(healthRouter);
router.use(statsRouter);
router.use(directorsRouter);

export default router;
