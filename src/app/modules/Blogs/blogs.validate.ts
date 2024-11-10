import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(1, 'Project name is required'),
  description: z.string().min(1, 'Description is required'),
  image: z.string().url().optional()
});


