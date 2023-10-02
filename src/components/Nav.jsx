import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navlinks = () => {
    return (
        <>
            <a href='/' className='px-4 mx-1 py-2 my-1 block lg:inline'>Home</a>
            <a href='/' className='px-4 mx-1 py-2 my-1 block lg:inline'>About</a>
            <a href='/' className='px-4 mx-1 py-2 my-1 block lg:inline'>Contact</a>
            <a href='/' className='px-4 mx-1 py-2 my-1 block lg:inline'>Portfolio</a>
            <a href='/' className='px-4 mx-1 py-2 my-1 block lg:inline hire rounded '>Hire Me</a>
        </>
    )
}



const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className='flex items-center justify-end'>
                <div className='hidden md:flex'>
                    <Navlinks />
                </div>
                <div className='md:hidden flex' onClick={handleToggle}>
                    {isOpen ? <X /> : <Menu />}
                </div>

            </nav>
            {
                isOpen && (
                    <div className='md:hidden basis-full w-full'>
                        <Navlinks />
                    </div>
                )
            }
        </>
    )
}

export default Nav