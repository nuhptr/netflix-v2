import Head from 'next/head'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'

import Navbar from '@/components/navbar'
import Billboard from '@/components/billboard'
import MovieList from '@/components/movie-list'

import useMovieList from '@/hooks/use-movielist'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)
  if (!session) return { redirect: { destination: '/auth', permanent: false } }

  return { props: {} }
}

export default function Home() {
  const { data: movies = [] } = useMovieList()

  return (
    <>
      <Head>
        <title>Netflix | Home</title>
        <meta name='description' content='Netflix clone using nextjs13' />
      </Head>

      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList title='Trending Now' data={movies} />
      </div>
    </>
  )
}
