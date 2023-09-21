import { useCallback, useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import Input from '@/components/input'

export default function Auth() {
  const [name, setName] = useState('') // [value, setValue
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === 'login' ? 'register' : 'login'))
  }, [])

  return (
    <>
      <Head>
        <title>{`${variant === 'login' ? 'Login' : 'Sign Up'} | Netflix`}</title>
        <meta name='description' content='Create / Sign In to netflix' />
      </Head>

      <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className='bg-black w-full h-full lg:bg-opacity-40'>
          <nav className='px-8 py-8'>
            <Image
              src='/images/logo.png'
              alt='Netflix Logo'
              width={48}
              height={48}
              className='h-12 w-auto'
            />
          </nav>

          <div className='flex justify-center'>
            <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
              <h2 className='text-white text-4xl mb-8 font-semibold'>
                {variant === 'login' ? 'Sign In' : 'Create an account'}
              </h2>
              <div className='flex flex-col gap-4'>
                {variant === 'register' && (
                  <Input
                    id='name'
                    label='Username'
                    type='text'
                    onChange={(event: any) => setName(event.target.value)}
                    value={name}
                  />
                )}
                <Input
                  id='email'
                  type='email'
                  label='Email'
                  onChange={(event: any) => setEmail(event.target.value)}
                  value={email}
                />
                <Input
                  id='password'
                  type='password'
                  label='Password'
                  onChange={(event: any) => setPassword(event.target.value)}
                  value={password}
                />
              </div>
              <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                {variant === 'login' ? 'Login' : 'Sign Up'}
              </button>
              <p className='text-neutral-500 mt-11'>
                {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                <span
                  onClick={toggleVariant}
                  className='text-white ml-1 hover:underline cursor-pointer'>
                  {variant === 'login' ? 'Create an account' : 'Sign In'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
