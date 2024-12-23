/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import { multerUpload } from "../../config/multer.config";
import { skillControllers } from "./skill.controller";



const router = express.Router();

router.post(
    "/",
    skillControllers.addSkill);


router.get("/", skillControllers.getAllSkills);

router.get("/:id", skillControllers.getSingleSkill)

router.patch("/:id", skillControllers.updateSkill);


router.delete("/:id", skillControllers.deleteSkill);


export const skillRoutes = router;
