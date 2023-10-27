/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         { protocol: "https", hostname: "lh3.googleusercontent.com" },
         { protocol: "https", hostname: "avatars.githubusercontent.com" },
         { protocol: "https", hostname: "upload.wikimedia.org" },
         { protocol: "http", hostname: "uhdtv.io" },
         { protocol: "https", hostname: "mango.blender.org" },
         { protocol: "https", hostname: "download.blender.org" },
         { protocol: "https", hostname: "github.com" },
         { protocol: "https", hostname: "storage.googleapis.com" },
      ],
   },
}

module.exports = nextConfig
