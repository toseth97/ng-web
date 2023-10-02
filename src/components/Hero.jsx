import React from 'react'
import Shades from "../static/images/Shades.png"
import Web4 from "../static/images/web4.png"
import Erika from "../static/images/erika.png"


const Hero = () => {
    return (
        <>
            <section className='flex lg:w-9/12 w-full justify-between flex-col lg:px-24 md:px-16 px-8 mt-8'>
                <h1 className='color1 font-bold text-4xl text-center mb-4'>Hi, I'm Ngozi!</h1>
                <p className='lg:text-center text-justify'>A UI/UX/Product designer with a background in event planning and 3 years of experience working and perfecting my skills in design, leadership, complex problem solving and communication. I believe the empathise phase is a very important step in the design process as how can we ever hope to create usable products without empathy. I am based in Leeds, UK.</p>

            </section>
            <section className='flex lg:w-8/12 w-full justify-between lg:flex-row flex-col lg:px-24 md:px-16 px-8 mt-8 items-center' >
                <div className='lg:w-4/12 w-full'>
                    <h1 className='color1 text-2xl font-bold text-center'><a href='/'>Shades</a></h1>
                    <p className='text-center'>Reimagining Socialization
                        among African Immigrants in the uk.
                    </p>
                </div>
                <img src={Shades} alt='shade' width={400} className='rounded-lg mt-4 lg:mt-0' />
            </section>
            <section className='flex lg:w-8/12 w-full justify-between lg:flex-row flex-col lg:px-24 md:px-16 px-8 mt-8 items-center' >
                <img src={Web4} alt='Web4' width={400} className='rounded-lg mt-4 lg:mt-0' />
                <div className='lg:w-4/12 w-full'>
                    <h1 className='color1 text-2xl font-bold text-center'><a href='/'>4Pay</a></h1>
                    <p className='text-center'>An intra-Africa payment app.
                    </p>
                </div>

            </section>
            <section className='flex lg:w-8/12 w-full justify-between lg:flex-row flex-col lg:px-24 md:px-16 px-8 mt-8 items-center' >
                <div className='lg:w-4/12 w-full'>
                    <h1 className='color1 text-2xl font-bold text-center'><a href='/'>Erika</a></h1>
                    <p className='text-center'>Your effective and efficient party planning app.
                    </p>
                </div>
                <img src={Erika} alt='Web4' width={400} className='rounded-lg mt-4 lg:mt-0' />
            </section>
        </>
    )

}

export default Hero