import Head from 'next/head'
import Image from 'next/image'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import useCurrentUser from '@/hooks/use-current-user'

export async function getServerSideProps(context: NextPageContext) {
   const session = await getSession(context)
   if (!session) return { redirect: { destination: '/auth', permanent: false } }

   return { props: {} }
}

export default function Profiles() {
   const router = useRouter()
   const { data: user } = useCurrentUser()

   return (
      <>
         <Head>
            <title>Profiles | Netflix</title>
         </Head>

         <div className='flex items-center h-full justify-center'>
            <div className='flex flex-col'>
               <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching?</h1>
               <div className='flex items-center justify-center gap-8 mt-10'>
                  <div onClick={() => router.push('/')}>
                     <div className='group w-44 mx-auto'>
                        <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
                           <Image
                              src={'/images/default-blue.png'}
                              alt='Profile'
                              width={150}
                              height={150}
                              className='object-contain'
                              priority
                           />
                        </div>

                        <div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white'>
                           {user?.name}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
