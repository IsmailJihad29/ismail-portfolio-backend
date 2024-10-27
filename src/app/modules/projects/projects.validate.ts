import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(1, 'Project name is required'),
  description: z.string().min(1, 'Description is required'),
  keyFeatures: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  liveLink: z.string().url().optional(),
  frontendRepoLink: z.string().url().optional(),
  backendRepoLink: z.string().url().optional(),
  image: z.string().url().optional()
});


