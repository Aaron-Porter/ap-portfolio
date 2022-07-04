module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/project/beach",
        destination: "/",
        permanent: true,
      },
      {
        source: "/project/thrive",
        destination: "/",
        permanent: true,
      },
      {
        source: "/project/strictly",
        destination: "/",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages(module.exports)


