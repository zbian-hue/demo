const path = require("path");

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isUserOrOrgPagesSite = repoName.endsWith(".github.io");
const basePath =
  isGitHubPages && repoName && !isUserOrOrgPagesSite ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: path.join(__dirname),
  },
};

module.exports = nextConfig;
