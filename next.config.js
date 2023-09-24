/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'upload.wikimedia.org',
      'uhdtv.io',
      'mango.blender.org',
      'download.blender.org',
      'github.com',
      'storage.googleapis.com',
    ],
  },
}

module.exports = nextConfig
