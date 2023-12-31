import { useCallback, useEffect, useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"

import PlayButton from "./play-button"
import FavoriteButton from "./favorite-button"

import useInfoModal from "@/hooks/use-info-modalstore"
import useMovie from "@/hooks/use-movie"

interface InfoModalProps {
   visible?: boolean
   onClose: () => void
}

export default function InfoModal({ visible, onClose }: InfoModalProps) {
   const [isVisible, setIsVisible] = useState(!!visible)

   const { movieId } = useInfoModal()
   const { data = {} } = useMovie(movieId)

   const handleClose = useCallback(() => {
      setIsVisible(false)
      setTimeout(() => {
         onClose()
      }, 300)
   }, [onClose])

   useEffect(() => {
      setIsVisible(!!visible)
   }, [visible])

   if (!visible) return null

   return (
      <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
         <div className="relative w-auto mx-auto max-w-3xl overflow-hidden rounded-md">
            <div
               className={`transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md ${
                  isVisible ? "scale-100" : "scale-0"
               }`}>
               <div className="relative h-96">
                  <video
                     src={data?.videoUrl}
                     poster={data?.thumbnailUrl}
                     autoPlay
                     muted
                     loop
                     className="w-full brightness-[60%] object-cover h-full"></video>
                  <div
                     className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
                     onClick={handleClose}>
                     <XMarkIcon className="text-white w-6" />
                  </div>
                  <div className="absolute bottom-[10%] left-10">
                     <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">{data?.title}</p>
                     <div className="flex flex-row gap-4 items-center">
                        <PlayButton movieId={data?.id} />
                        <FavoriteButton movieId={data?.id} />
                     </div>
                  </div>
               </div>

               <div className="px-10 py-8">
                  <div className="flex flex-row items-start gap-10 mb-8">
                     <p className="text-green-500 font-semibold text-lg">New</p>
                     <p className="text-white text-lg">{data?.duration}</p>
                     <p className="text-white text-lg">{data?.genres}</p>
                     <p className="text-white text-lg">{data?.description}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
