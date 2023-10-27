import { signOut } from "next-auth/react"
import Image from "next/image"

import useCurrentUser from "@/hooks/use-current-user"

type AccountMenuProps = {
   visible?: boolean
}

export default function AccountMenu({ visible }: AccountMenuProps) {
   const { data } = useCurrentUser()

   if (!visible) return null

   return (
      <div className=" bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
         <div className="flex flex-col gap-3">
            <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
               <Image
                  src={"/images/default-blue.png"}
                  alt="Profiles in account menu"
                  width={32}
                  height={32}
                  className="w-8 rounded-md object-cover"
               />
               <p className="text-white group-hover/item:underline">{data?.name}</p>
            </div>
            <hr className="bg-gray-600 border-0 h-px my-4" />
            <div onClick={() => signOut()} className="px-3 text-center text-white hover:underline">
               Sign out of Netlifix
            </div>
         </div>
      </div>
   )
}
