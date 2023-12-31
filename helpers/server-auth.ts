import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"

import { options } from "@/pages/api/auth/[...nextauth]"
import prisma from "@/helpers/prismadb"

export default async function serverAuth(request: NextApiRequest, response: NextApiResponse) {
   const session = await getServerSession(request, response, options)
   if (!session?.user?.email) throw new Error("Not Signed In!")

   const currentUser = await prisma.user.findUnique({ where: { email: session.user.email } })
   if (!currentUser) throw new Error("Not Signed In!")

   return currentUser
}
