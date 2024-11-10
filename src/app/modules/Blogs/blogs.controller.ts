import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { BlogsService } from "./blogs.service";

const createBlogs = catchAsync(async (req: Request, res: Response) => {
  const projects = req.body;
  const result = await BlogsService.CreateBlogsIntoDb(projects);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs added successfully",
    data: result,
  });
});

const getBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogsService.GetBlogsFromDb();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Projects retrieved successfully",
    data: result,
  });
});

const updateBlogs = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project = req.body;
  const result = await BlogsService.updateBlogsFromDb(id, project);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs updated successfully",
    data: result,
  });
});

// Delete a project
const deleteBlogs = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogsService.deleteBlogsIntoDb(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs deleteded successfully",
    data: result,
  });
});

export const BLogsController = {
  createBlogs,
  getBlogs,
  updateBlogs,
  deleteBlogs,
};
