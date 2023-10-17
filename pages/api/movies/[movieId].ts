import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/helpers/prismadb'
import serverAuth from '@/helpers/server-auth'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
   if (request.method !== 'GET') return response.status(405).end()

   try {
      await serverAuth(request, response)

      const { movieId } = request.query
      if (typeof movieId !== 'string') throw new Error('Invalid Movie Id')
      if (!movieId) throw new Error('Movie Id is required')

      const movie = await prisma.movie.findUnique({ where: { id: movieId } })
      if (!movie) throw new Error('Movie not found')

      return response.status(200).json(movie)
   } catch (error: any) {
      console.error(error)
      return response.status(400).end()
   }
}
