import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

import useMovie from '@/hooks/use-movie'

export default function WatchMovie() {
  const router = useRouter()
  const { movieId } = router.query

  const { data } = useMovie(movieId as string)

  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
        <ArrowLeftIcon
          onClick={() => router.push('/')}
          className='w-4 md:w-8 text-white cursor-pointer hover:opacity-80 transition'
        />
        <p className='text-white text-xl md:text-3xl font-bold'>
          <span className='font-light'>Watching:</span> {data?.title}
        </p>
      </nav>
      <video src={data?.videoUrl} className='h-full w-full' autoPlay controls></video>
    </div>
  )
}
