import Image from "next/image"
import Head from "next/head"
import axios from "axios"
import { useCallback, useState } from "react"
import { signIn } from "next-auth/react"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

import Input from "@/components/input"

export default function Auth() {
   const [name, setName] = useState("") // [value, setValue
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const [variant, setVariant] = useState("login")

   const toggleVariant = useCallback(() => {
      setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"))
   }, [])

   const login = useCallback(async () => {
      try {
         await signIn("credentials", { email, password, callbackUrl: "/profiles" })
      } catch (error) {
         console.error(error)
      }
   }, [email, password])

   const register = useCallback(async () => {
      try {
         await axios.post("/api/register", { name, email, password })
      } catch (error) {
         console.error(error)
      }

      login()
   }, [email, login, name, password])

   const title = variant === "login" ? "Sign In" : "Register"

   return (
      <>
         <Head>
            <title>{`${title} | Netflix`}</title>
            <meta name="description" content="Create / Sign In to netflix" />
         </Head>

         <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-40">
               <nav className="px-8 py-8">
                  <Image src="/images/logo.png" alt="Netflix Logo" width={48} height={48} className="h-12 w-auto" />
               </nav>

               <div className="flex justify-center">
                  <div className="bg-black bg-opacity-70 px-14 py-10 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                     <p className="text-red-500 text-xl mb-2">Please don&apos;t use real netflix account!</p>
                     <h2 className="text-white text-4xl mb-8 font-semibold">
                        {variant === "login" ? "Sign In" : "Create an account"}
                     </h2>
                     <div className="flex flex-col gap-4">
                        {variant === "register" && (
                           <Input
                              id="name"
                              label="Username"
                              type="text"
                              onChange={(event: any) => setName(event.target.value)}
                              value={name}
                           />
                        )}
                        <Input
                           id="email"
                           type="email"
                           label="Email"
                           onChange={(event: any) => setEmail(event.target.value)}
                           value={email}
                        />
                        <Input
                           id="password"
                           type="password"
                           label="Password"
                           onChange={(event: any) => setPassword(event.target.value)}
                           value={password}
                        />
                     </div>
                     <button
                        onClick={variant === "login" ? login : register}
                        className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                        {variant === "login" ? "Login" : "Sign Up"}
                     </button>
                     {/* Social Auth */}
                     <div className="flex items-center gap-4 mt-8 justify-center">
                        <div
                           className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                           onClick={() => signIn("google", { callbackUrl: "/profiles" })}>
                           <FcGoogle size={30} />
                        </div>
                        <div
                           className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
                           onClick={() => signIn("github", { callbackUrl: "/profiles" })}>
                           <FaGithub size={30} />
                        </div>
                     </div>
                     <p className="text-neutral-500 mt-8">
                        {variant === "login" ? "First time using Netflix?" : "Already have an account?"}
                        <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                           {variant === "login" ? "Create an account" : "Login"}
                        </span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
