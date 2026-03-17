import { Router } from "express";

import {addMember, getMembers, postTeam} from "../controllers/teamController.js";

const router = Router();

router.post("/teams", postTeam)
router.post("/teams/:id/members", addMember)
router.get("/teams/:id/members", getMembers)


export default router