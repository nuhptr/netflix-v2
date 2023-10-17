import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/helpers/prismadb'
import serverAuth from '@/helpers/server-auth'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
   if (request.method !== 'GET') return response.status(405).end()

   try {
      await serverAuth(request, response)

      const movieCount = await prisma.movie.count()
      const randomIndex = Math.floor(Math.random() * movieCount)

      const randomMovies = await prisma.movie.findMany({ take: 1, skip: randomIndex })

      return response.status(200).json(randomMovies[0])
   } catch (error: any) {
      console.error(error)
      return response.status(400).end()
   }
}
