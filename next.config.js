const withNextIntl = require("next-intl/plugin")(
  "./src/i18n.ts" // Precise path to your i18n file
);

module.exports = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Other Next.js configurations can go here
});
