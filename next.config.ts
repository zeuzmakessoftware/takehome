import type { NextConfig } from "next";

// Determine if we're running on GitHub Pages
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

// Get repository name from environment variable set in GitHub Actions
const repoName = process.env.REPOSITORY_NAME || 'takehome';

const nextConfig: NextConfig = {
  output: "export",
  // Correctly handle static asset paths for GitHub Pages
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  basePath: isGithubPages ? `/${repoName}` : '',
  // This ensures Next.js knows the correct path for static assets
  trailingSlash: true,
  // Disable image optimization since GitHub Pages doesn't support it
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
