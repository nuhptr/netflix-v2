import { isEmpty } from 'lodash'

import MovieCard from './movie-card'

type MovieListProps = {
   data: Record<string, any>
   title: string
}

export default function MovieList({ data, title }: MovieListProps) {
   if (isEmpty(data)) return null

   return (
      <div className='px-4 md:px-12 mt-10 space-y-8'>
         <div>
            <p className='text-white text-base md:text-xl lg:text-2xl font-semibold mb-4'>{title}</p>
            <div className='grid grid-cols-4 gap-5'>
               {data.map((movie: any) => (
                  <MovieCard key={movie.id} data={movie} />
               ))}
            </div>
         </div>
      </div>
   )
}
