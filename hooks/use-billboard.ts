import useSWR from 'swr'

import fetcher from '@/helpers/fetcher'

export default function useBillboard() {
  const { data, error, isLoading } = useSWR('/api/random', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  })

  return { data, error, isLoading }
}
