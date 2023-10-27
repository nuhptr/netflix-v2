interface MobileMenuProps {
   visible?: boolean
}

export default function MobileMenu({ visible }: MobileMenuProps) {
   if (!visible) return null

   return (
      <div className="flex bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 text-white">
         <div className="flex flex-col items-start gap-4">
            <div className="px-3 text-center text-white hover:underline">Home</div>
            <div className="px-3 text-center text-white hover:underline">Series</div>
            <div className="px-3 text-center text-white hover:underline">Films</div>
            <div className="px-3 text-center text-white hover:underline">New & Populer</div>
            <div className="px-3 text-center text-white hover:underline">My List</div>
            <div className="px-3 text-center text-white hover:underline">Browse by Language</div>
         </div>
      </div>
   )
}
