import { Project, TProject } from './projects.model';


const CreateProjectIntoDb = async (projects: TProject) => {
    const project = await Project.create(projects);
    return project
  };

const UpdateProjectIntoDb = async (projectId: string, projectData: Partial <TProject>) => {
    return await Project.findByIdAndUpdate(projectId, projectData, { new: true });
  };
const DeleteProjectIntoDb = async (projectId: string) => {
    return await Project.findByIdAndDelete(projectId);
  };

  

export const ProjectsService = {
    CreateProjectIntoDb,
    UpdateProjectIntoDb,
  };
  
