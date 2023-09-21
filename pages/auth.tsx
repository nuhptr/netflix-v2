import Image from 'next/image'
import { useState } from 'react'

import Input from '@/components/input'

export default function Auth() {
  const [name, setName] = useState('') // [value, setValue
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-40'>
        <nav className='px-12 py-5'>
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
            <h2 className='text-white text-4xl mb-8 font-semibold'>Sign In</h2>
            <div className='flex flex-col gap-4'>
              <Input
                id='name'
                label='Username'
                type='text'
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <Input
                id='email'
                type='email'
                label='Email'
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <Input
                id='password'
                type='password'
                label='Password'
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}