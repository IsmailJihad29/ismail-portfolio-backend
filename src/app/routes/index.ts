import { Router } from "express";
import { ProjectsRoute } from "../modules/projects/projects.route";
import { UserRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/Auth/auth.router";
import { BlogsRoutes } from "../modules/Blogs/blogs.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/projects',
    route: ProjectsRoute,
  },
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
 
  {
    path: '/blogs',
    route: BlogsRoutes,
  },
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;