import { Router } from "express";
import { subscriptionController } from "../controllers/subscription.controller";

const router: Router = Router();

router.get("/", subscriptionController.getAll);
router.post("/", subscriptionController.create);

router.get("/:id", subscriptionController.getOne);
router.patch("/:id", subscriptionController.update);
router.delete("/:id", subscriptionController.delete);

export default router;
