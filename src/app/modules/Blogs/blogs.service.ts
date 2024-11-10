import mongoose from 'mongoose';
import { Blogs, TBlogs } from './blogs.model';


const CreateBlogsIntoDb = async (blogs: TBlogs) => {
    const blog = await Blogs.create(blogs);
    return blog
  };

  const GetBlogsFromDb = async ( ) => {
    const result = await Blogs.find();
    return result;
  };



  const updateBlogsFromDb = async (
    id: string,
    updateData: Partial<TBlogs>
  ) => {
    const objectId = new mongoose.Types.ObjectId(id);
  
    // Check if the document exists before updating
    const existingBlogs = await Blogs.findById(objectId);
    if (!existingBlogs) {
      throw new Error( "Invalid Blogs ID");
    }
  
    const updatedBlogs = await Blogs.findByIdAndUpdate(
      new mongoose.Types.ObjectId(id),
      { $set: updateData },
      { new: true, runValidators: true }
    );
  
    return updatedBlogs;
  };


  
const deleteBlogsIntoDb = async (id: string) => {
  const objectId = new mongoose.Types.ObjectId(id);
 
  const existingBlogs= await Blogs.findById(objectId);
  if (!existingBlogs) {
    throw new Error( "Invalid facility ID");
  }

  const deletedFaculty = await Blogs.findOneAndUpdate(
    { _id: objectId },
    { isDeleted: true },
    { new: true }
  );
  return deletedFaculty;
};


  

export const BlogsService = {
  CreateBlogsIntoDb,
  GetBlogsFromDb,
  updateBlogsFromDb,
    deleteBlogsIntoDb
  };
  
