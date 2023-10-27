import useSWR from "swr"

import fetcher from "@/helpers/fetcher"

export default function useMovieList() {
   const { data, error, isLoading } = useSWR("/api/movies", fetcher, {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
   })

   return { data, error, isLoading }
}
