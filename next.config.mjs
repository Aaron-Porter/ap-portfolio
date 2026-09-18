import stylexPlugin from "@stylexswc/nextjs-plugin";

const withStyleX = stylexPlugin({
  rsOptions: {
    dev: process.env.NODE_ENV !== "production",
  },
});

export default withStyleX({
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1104, 1200, 1600, 1920, 2048, 2256],
    qualities: [75, 90],
    formats: ["image/webp"],
  },
});
