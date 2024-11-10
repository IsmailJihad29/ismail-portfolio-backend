import express from "express";
import { ProjectsController } from "./projects.controller";
import { USER_ROLE } from "../User/user.interface";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/", auth(USER_ROLE.admin), ProjectsController.createProjects);
router.get("/", ProjectsController.getProjects);
router.put("/:id", auth(USER_ROLE.admin), ProjectsController.updateProject);
router.delete("/:id", auth(USER_ROLE.admin), ProjectsController.deleteProject);



export const ProjectsRoute = router;
