import NextAuth, { AuthOptions } from 'next-auth'
import bcrypt from 'bcrypt'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prisma from '@/helpers/prismadb'

export const options: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and Password Required')
        }

        const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (!user) throw new Error('Email does not exist')

        const isValidPassword = await bcrypt.compare(credentials.password, user.hashedPassword)
        if (!isValidPassword) throw new Error('Incorrect Password')

        return user
      },
    }),
  ],
  pages: { signIn: '/auth' },
  debug: process.env.NODE_ENV === 'development',
  session: { strategy: 'jwt' },
  jwt: { secret: process.env.JWT_SECRET },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(options)
