import { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/helpers/prismadb'
import serverAuth from '@/helpers/server-auth'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== 'GET') return response.status(405).end()

  try {
    await serverAuth(request, response)
    const movies = await prisma.movie.findMany()

    return response.status(200).json(movies)
  } catch (error: any) {
    console.error(error)
    return response.status(400).end()
  }
}
