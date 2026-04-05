/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "aerahealth.de" }],
        destination: "https://www.aerahealth.de/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
