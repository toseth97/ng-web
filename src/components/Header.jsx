import React from 'react'
import Logo from './Logo'
import Nav from './Nav'





const Header = () => {
    return (
        <header className='z-[20] flex w-full justify-between lg:px-24 md:px-16 px-8 items-center flex-wrap sticky top-0 bg-white/[.90] backdrop-blur'>
            <Logo />
            <Nav />
        </header>
    )
}

export default Header