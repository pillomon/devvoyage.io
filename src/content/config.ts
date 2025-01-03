import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    isDraft: z.boolean().default(true),
    title: z.string(),
    tags: z.array(z.string()),
    thumbnail: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    createdDate: z.date(),
    modifiedDate: z.date().optional(),
    topic: z.string(),
    bilingual: z.boolean(),
  }),
});
const ballCollection = defineCollection({
  type: 'content',
  schema: z.object({
    isDraft: z.boolean().default(true),
    title: z.string(),
    createdDate: z.date(),
    modifiedDate: z.date().optional(),
    bilingual: z.boolean(),
  }),
});
export const collections = {
  blog: blogCollection,
  ball: ballCollection,
};
