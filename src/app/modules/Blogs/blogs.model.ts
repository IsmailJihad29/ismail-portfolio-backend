import { Schema, model,  } from 'mongoose';

export type TBlogs  = {
  title: string;
  description: string;
  image: string;
  isDeleted: boolean
}

const blogsSchema = new Schema<TBlogs>({
  title: { type: String, required: true },
description: { type: String, required: true },
  image: { type: String, required: true },
  isDeleted: {type: Boolean, default: false}
});

export const Blogs = model<TBlogs>('Blogs', blogsSchema);

