import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/helpers/prismadb'
import serverAuth from '@/helpers/server-auth'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'GET') return response.status(405).end()

  try {
    const currentUser = await serverAuth(request, response)

    const favoritedMovies = await prisma.movie.findMany({
      where: { id: { in: currentUser?.favoriteIds } },
    })

    return response.status(200).json(favoritedMovies)
  } catch (error: any) {
    console.error(error)
    return response.status(400).end()
  }
}
