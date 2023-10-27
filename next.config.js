/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         { protocol: "https", hostname: "lh3.googleusercontent.com", path: "" },
         { protocol: "https", hostname: "avatars.githubusercontent.com", path: "" },
         { protocol: "https", hostname: "upload.wikimedia.org", path: "" },
         { protocol: "https", hostname: "uhdtv.io", path: "" },
         { protocol: "https", hostname: "mango.blender.org", path: "" },
         { protocol: "https", hostname: "download.blender.org", path: "" },
         { protocol: "https", hostname: "github.com", path: "" },
         { protocol: "https", hostname: "storage.googleapis.com", path: "" },
      ],
   },
}

module.exports = nextConfig
