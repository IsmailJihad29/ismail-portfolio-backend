import mongoose from 'mongoose';
import { Project, TProject } from './projects.model';


const CreateProjectIntoDb = async (projects: TProject) => {
    const project = await Project.create(projects);
    return project
  };

  const GetProjectsFromDb = async ( ) => {
    const result = await Project.find();
    return result;
  };



  const UpdateProjectIntoDb = async (
    id: string,
    updateData: Partial<TProject>
  ) => {
    const objectId = new mongoose.Types.ObjectId(id);
  
    // Check if the document exists before updating
    const existingProject = await Project.findById(objectId);
    if (!existingProject) {
      throw new Error( "Invalid Projcet ID");
    }
  
    const updatedProject = await Project.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id),
      { $set: updateData },
      { new: true, runValidators: true }
    );
  
    return updatedProject;
  };


  
const DeleteProjectIntoDb = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
 
  const existingFacility = await Project.findById(objectId);
  if (!existingFacility) {
    throw new Error( "Invalid facility ID");
  }

  const deletedFaculty = await Project.findOneAndUpdate(
    { _id: objectId },
    { isDeleted: true },
    { new: true }
  );
  return deletedFaculty;
};


  

export const ProjectsService = {
    CreateProjectIntoDb,
    GetProjectsFromDb,
    UpdateProjectIntoDb,
    DeleteProjectIntoDb
  };
  
