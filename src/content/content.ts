import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    //loader: glob({pattern: "*.md", base: "./src/content/blog"}),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        publishedAt: z.date(),
        description: z.string()
    })
});

export const collections = { blog };