import { createClient } from "next-sanity";
import createImageBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-11-16",
  useCdn: process.env.NODE_ENV === "production", // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
};

export const client = createClient(config);
export const urlFor = (source) => createImageBuilder(config).image(source);
