import { Request, Response } from "express";
import { ProjectsService } from "./projects.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createProjects = catchAsync(async (req:Request, res:Response) => {
  const projects = req.body;
  const result = await ProjectsService.CreateProjectIntoDb(projects);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Facility added successfully",
    data: result,
  });
});

// export class ProjectController {
//   // Add a new project
//   static async addProject(req: Request, res: Response) {
//     try {
//       const newProject = await ProjectService.addProject(req.body);
//       res.status(201).json(newProject);
//     } catch (error) {
//       res.status(500).json({ message: "Error adding project", error });
//     }
//   }

//   // Update an existing project
//   static async updateProject(req: Request, res: Response) {
//     try {
//       const updatedProject = await ProjectService.updateProject(
//         req.params.id,
//         req.body
//       );
//       if (!updatedProject)
//         return res.status(404).json({ message: "Project not found" });
//       res.json(updatedProject);
//     } catch (error) {
//       res.status(500).json({ message: "Error updating project", error });
//     }
//   }

//   // Delete a project
//   static async deleteProject(req: Request, res: Response) {
//     try {
//       const deletedProject = await ProjectService.deleteProject(req.params.id);
//       if (!deletedProject)
//         return res.status(404).json({ message: "Project not found" });
//       res.json({ message: "Project deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Error deleting project", error });
//     }
//   }
// }

export const ProjectsController = {
    createProjects,
  
  };
  
