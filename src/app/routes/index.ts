import { Router } from "express";
import { ProjectsRoute } from "../modules/projects/projects.route";

const router = Router();

const moduleRoutes = [
  {
    path: '/projects',
    route: ProjectsRoute,
  },
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;