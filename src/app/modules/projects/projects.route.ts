import express from 'express';
import { ProjectsController } from './projects.controller';


const router = express.Router()

router.post('/', ProjectsController.createProjects);
// router.put('/projects/:id', verifyAdmin, ProjectController.updateProject);
// router.delete('/projects/:id', verifyAdmin, ProjectController.deleteProject);

export const ProjectsRoute = router;

