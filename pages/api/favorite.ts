import { NextApiRequest, NextApiResponse } from 'next'
import { without } from 'lodash'

import prisma from '@/helpers/prismadb'
import serverAuth from '@/helpers/server-auth'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const currentUser = await serverAuth(request, response)
      const { movieId } = request.body

      const existingmovie = await prisma.movie.findUnique({ where: { id: movieId } })
      if (!existingmovie) throw new Error('Invalid Movie Id!')

      const user = await prisma.user.update({
        where: { email: currentUser.email || '' },
        data: { favoriteIds: { push: movieId } },
      })

      return response.status(200).json(user)
    }

    if (request.method === 'DELETE') {
      const currentUser = await serverAuth(request, response)
      const { movieId } = request.body

      const existingMovie = await prisma.movie.findUnique({ where: { id: movieId } })
      if (!existingMovie) throw new Error('Invalid Movie Id')

      const updateFavoriteIds = without(currentUser.favoriteIds, movieId)
      const updateUser = await prisma.user.update({
        where: { email: currentUser.email || '' },
        data: { favoriteIds: updateFavoriteIds },
      })

      return response.status(200).json(updateUser)
    }

    return response.status(405).end()
  } catch (error: any) {
    console.error(error)
    return response.status(400).end()
  }
}
