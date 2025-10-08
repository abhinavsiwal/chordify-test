import React from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <div className='bg-primary h-16 flex items-center justify-between px-4 z-20 fixed top-0 w-full'>
        <p className="text-white text-4xl font-bold">JMP</p>
        <div className="rounded-full bg-primary p-2 flex items-center gap-2 shadow-2xl">
            <p className="rounded-full bg-gray-800 p-2 text-white">DO</p>
            <ChevronDown className="text-white" />
        </div>
    </div>
  )
}

export default Header