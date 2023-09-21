import React from 'react'

interface InputProps {
  id: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  label: string
  type?: string
}

export default function Input({ id, onChange, value, label, type }: InputProps) {
  return (
    <div className='relative'>
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        className='block rounded-md px-6 pt-6 pb-1 w-full text-lg text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1'
        placeholder=''
      />
      <label
        className='absolute text-lg text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-3.5 left-6 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3'
        htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
