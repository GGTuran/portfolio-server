import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.routes";
import { UserRoutes } from "../modules/user/user.routes";
import { projectRoutes } from "../modules/projects/project.route";
import { blogRoutes } from "../modules/blog/blog.route";
import { skillRoutes } from "../modules/skill/skill.route";
import { experienceRoutes } from "../modules/experience/experience.route";




const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/auth',
        route: authRoutes,
    },
    {
        path: '/projects',
        route: projectRoutes,
    },
    {
        path: '/blogs',
        route: blogRoutes,
    },
    {
        path: '/skills',
        route: skillRoutes,
    },
    {
        path: '/experience',
        route: experienceRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;