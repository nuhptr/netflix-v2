# Creating a Fullstack App with Next.js and Prisma Netflix Clone

![Fullstack Netflix Clone](https://github.com/nuhptr/netflix-clone-v2/assets/50306963/60c591b5-3d65-4b39-93e6-6d2bfba317d1)

## Getting Started

-  [Next.js](https://nextjs.org/) - npx create-next-app@latest --typescript --tailwind
-  [Prisma](https://www.prisma.io/)
   -  npm install prisma -D (ORM Database)
   -  npx prisma init (Create prisma folder)
   -  npx prisma db push (Create database)
-  [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)
   -  npm install @prisma/client (Prisma Client)
   -  npx prisma generate (Generate Prisma Client)
-  [Next Auth](https://next-auth.js.org/) - npm install next-auth
-  [Bcrypt](https://www.npmjs.com/package/bcrypt) - npm install bcrypt && npm install @types/bcrypt -D
-  [@Next-Auth/Prisma-Adapter](https://next-auth.js.org/adapters/prisma) - npm install @next-auth/prisma-adapter
-  [Axios](https://www.npmjs.com/package/axios) - npm install axios
-  [React Icons](https://react-icons.github.io/react-icons/) - npm install react-icons
-  [SWR](https://swr.vercel.app/) - npm install swr
-  [Lodash](https://lodash.com/) - npm install lodash && npm install -D @types/lodash (utilities library)
-  [Heroicons](https://github.com/tailwindlabs/heroicons) - npm install @heroicons/react@latest
-  [Zustand](https://zustand-demo.pmnd.rs/) - npm install zustand@latest (state management)

## Integrated

-  For github open developer setting
-  for google open google cloud console -> api & services -> credentials
-  For google don't forget add `http://localhost:3000/api/auth/callback/google` in Authorized redirect URIs

## env

```javascript
DATABASE_URL=""
NEXTAUTH_JWT_SECRET=""
NEXTAUTH_SECRET=""

# buka github developer oauth lu
GITHUB_ID=
GITHUB_SECRET=

# buka console google lu
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

## Package Install

-  use `npm install --legacy-peer-deps` if you get error
-  delete old package.lock.json and node_modules
