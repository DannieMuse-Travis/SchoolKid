import { Router } from "express";
import { createKids, viewKids, viewSortedkids } from "../controller/kidController";


const router: Router = Router();

router.route("/createkid").post(createKids);
router.route("/find-kid").get(viewKids);
router.route("/sort-kid").get(viewSortedkids);

export default router;
