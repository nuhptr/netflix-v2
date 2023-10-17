import axios from 'axios'
import { useCallback, useMemo } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/20/solid'

import useCurrentUser from '@/hooks/use-current-user'
import useFavorites from '@/hooks/use-favorites'

interface FavoriteButtonProps {
   movieId: string
}

export default function FavoriteButton({ movieId }: FavoriteButtonProps) {
   const { mutate: mutateFavorites } = useFavorites()
   const { data: currentUser, mutate } = useCurrentUser()

   const isFavorite = useMemo(() => {
      const list = currentUser?.favoriteIds || []
      return list.includes(movieId)
   }, [currentUser, movieId])

   const toggleFavorite = useCallback(async () => {
      let response
      if (isFavorite) response = await axios.delete('/api/favorite', { data: { movieId } })
      else response = await axios.post('/api/favorite', { movieId })

      const updatedFavorites = response?.data?.favoritesIds
      mutate({ ...currentUser, favoriteIds: updatedFavorites })

      mutateFavorites()
   }, [isFavorite, movieId, mutate, currentUser, mutateFavorites])

   const Icon = isFavorite ? CheckIcon : PlusIcon

   return (
      <div
         onClick={toggleFavorite}
         className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full 
         flex justify-center items-center transition hover:border-neutral-300'>
         <Icon className='text-white group-hover/item:text-neutral-300 w-4 lg:w-6' />
      </div>
   )
}
