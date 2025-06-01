import type { NextConfig } from "next";

// Get the repository name from package.json or environment variable
const getBasePath = () => {
  // For GitHub Pages, the base path should be the repository name
  // If this is a custom domain, you can set this to empty string
  const repoName = process.env.REPOSITORY_NAME || '';
  return repoName ? `/${repoName}` : '';
};

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Add basePath for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? getBasePath() : '',
  // Add assetPrefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? getBasePath() : '',
};

export default nextConfig;
