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
    message: "Project added successfully",
    data: result,
  });
});


const getProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectsService.GetProjectsFromDb();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Projects retrieved successfully",
    data: result,
  });
});


const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project = req.body;
  const result = await ProjectsService.UpdateProjectIntoDb(id, project);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product updated successfully",
    data: result,
  });
});

// Delete a project
const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectsService.DeleteProjectIntoDb(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project deleteded successfully",
    data: result,
  });
});


export const ProjectsController = {
    createProjects,
    getProjects,
    updateProject,
    deleteProject
    
  
  };
  
