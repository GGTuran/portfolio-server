/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import { multerUpload } from "../../config/multer.config";
import { blogControllers } from "./blog.controller";


const router = express.Router();

router.post(
    "/",
    multerUpload.single('image'),
    blogControllers.insertBlog);


router.get("/", blogControllers.getAllBlogs);

router.get("/:id", blogControllers.getSingleBlog)

router.patch(
    "/:id",

    multerUpload.single('image'),
    blogControllers.updateBlog);
router.delete(
    "/:id",
    blogControllers.deleteBlog);



export const blogRoutes = router;
