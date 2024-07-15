// src/sanityClient.js
import { createClient } from "@sanity/client";

export default createClient({
  projectId: "kf98wkle",
  dataset: "production",
  useCdn: false,
});
