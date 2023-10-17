import Image from 'next/image'
import { BsFillPlayFill } from 'react-icons/bs'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

import useInfoModalStore from '@/hooks/use-info-modalstore'

import FavoriteButton from './favorite-button'

type MovieCardProps  = {
   data: Record<string, any>
}

export default function MovieCard({ data }: MovieCardProps) {
   const router = useRouter()
   const { openModal } = useInfoModalStore()

   return (
      <div className='group bg-zinc-900 col-span relative h-[12vw]'>
         <Image
            src={data?.thumbnailUrl}
            alt='Movie Thumbnail'
            className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]'
            width={100}
            height={100}
         />
         <div className='opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw]  group-hover:opacity-100'>
            <Image
               src={data?.thumbnailUrl}
               alt='Movie Thumbnail'
               className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]'
               width={100}
               height={100}
            />
            <div className='z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md'>
               <div className='flex flex-row items-center gap-3'>
                  <div
                     onClick={() => router.push(`/watch/${data?.id}`)}
                     className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300'>
                     <BsFillPlayFill size={20} />
                  </div>
                  <FavoriteButton movieId={data?.id} />
                  <div
                     onClick={() => openModal(data?.id)}
                     className='cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
                     <ChevronDownIcon className='text-white group-hover/item:text-neutral-300 h-7' />
                  </div>
               </div>

               <p className='text-green-500 font-semibold mt-4'>
                  {data?.title} <span className='text-white font-normal opacity-60'>(New 2023)</span>
               </p>
               <div className='flex flex-row mt-2 gap-2 items-center'>
                  <p className='text-white text-[10px] lg:text-sm'>{data?.duration}</p>
                  <p className='text-green-500 opacity-20'>✦</p>
                  <p className='text-white text-[10px] lg:text-sm'>{data?.genres}</p>
               </div>
            </div>
         </div>
      </div>
   )
}
