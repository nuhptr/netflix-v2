# Creating a Fullstack App with Next.js and Prisma Netflix Clone

## Getting Started

- [Next.js](https://nextjs.org/) - npx create-next-app@latest --typescript --tailwind
- [Prisma](https://www.prisma.io/)
  - \*\* npm install prisma -D (ORM Database)
  - \*\* npx prisma init (Create prisma folder)
  - \*\* npx prisma db push (Create database)
- [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)
  - \*\* npm install @prisma/client (Prisma Client)
  - \*\* npx prisma generate (Generate Prisma Client)
- [Next Auth](https://next-auth.js.org/) - npm install next-auth
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - npm install bcrypt && npm install @types/bcrypt -D
- [@Next-Auth/Prisma-Adapter](https://next-auth.js.org/adapters/prisma) - npm install @next-auth/prisma-adapter
- [Axios](https://www.npmjs.com/package/axios) - npm install axios
- [React Icons](https://react-icons.github.io/react-icons/) - npm install react-icons
- [SWR](https://swr.vercel.app/) - npm install swr
- [Lodash](https://lodash.com/) - npm install lodash && npm install -D @types/lodash (utilities library)
- [Heroicons](https://github.com/tailwindlabs/heroicons) - npm install @heroicons/react@latest
- [Zustand](https://zustand-demo.pmnd.rs/) - npm install zustand@latest (state management)

## Integrated

- For github open developer setting
- for google open google cloud console -> api & services -> credentials
- For google don't forget add `http://localhost:3000/api/auth/callback/google` in Authorized redirect URIs

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
