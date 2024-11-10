import { Schema, model, Document } from 'mongoose';

export type TProject  = {
  title: string;
  description: string;
  keyFeatures: string[];
  technologies: string[];
  liveLink: string;
  frontendRepoLink: string;
  backendRepoLink: string;
  image: string;
  isDeleted: boolean
}

const projectSchema = new Schema<TProject>({
  title: { type: String, required: true },
description: { type: String, required: true },
  keyFeatures: { type: [String], required: true },
  technologies: { type: [String], required: true },
  liveLink: { type: String, required: true },
  frontendRepoLink: { type: String, required: true },
  backendRepoLink: { type: String, required: true },
  image: { type: String, required: true },
  isDeleted: {type: Boolean, default: false}
});

export const Project = model<TProject>('Project', projectSchema);

