/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import { multerUpload } from "../../config/multer.config";
import { projectControllers } from "./project.controller";



const router = express.Router();

router.post(
    "/",
    multerUpload.single('image'),
    projectControllers.insertProject);


router.get("/", projectControllers.getAllProjects);

router.get("/:id", projectControllers.getSingleProject)

router.patch(
    "/:id",

    multerUpload.single('image'),
    projectControllers.updateProject);
router.delete(
    "/:id",
    projectControllers.deleteProject);





export const projectRoutes = router;
