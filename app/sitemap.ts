import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.carhiremumbai.com/",
      lastModified: new Date(),
    },
    {
      url: "https://www.carhiremumbai.com/mumbai-darshan-cab",
      lastModified: new Date(),
    },
    {
      url: "https://www.carhiremumbai.com/mumbai-to-pune-cab",
      lastModified: new Date(),
    },
    {
      url: "https://www.carhiremumbai.com/mumbai-to-lonavala-cab",
      lastModified: new Date(),
    },
    {
      url: "https://www.carhiremumbai.com/services-we-provide",
      lastModified: new Date(),
    },
    {
      url: "https://www.carhiremumbai.com/fleets",
      lastModified: new Date(),
    },
  ];
}
