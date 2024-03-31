import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
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
  }),
});
export const collections = {
  blog: blogCollection,
};
