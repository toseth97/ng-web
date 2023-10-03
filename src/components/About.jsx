import React from 'react'
import Ngozi1 from "../static/images/Ngozi_picture.png"
import Ngozi2 from "../static/images/Ngozi_picture2.png"

const About = () => {
    return (
        <>
            <section className='flex lg:w-8/12 w-full justify-between lg:flex-row flex-col  px-8 mt-8 items-center gap-8' >
                <img src={Ngozi1} alt='shade' width={250} className='rounded-lg mt-4 lg:mt-0 lg:mr-24' />
                <div className='w-full text-justify'>
                    <h1 className='color1 text-2xl font-bold text-center'>Hi there!</h1>
                    <p className='my-4'>
                        I’m Ngozi- I’m an Event Planner & Baker turned Product Designer based in Leeds, UK. My passion lies in crafting seamless user experiences. Through the process of collecting, analysing, and deriving insights from user data, I strive to create products that deliver exceptional functionality.
                    </p>
                    <p className='my-4'>
                        As a product designer, i see the design process as a way of coming up with creative products that puts user needs first. I prioritize accessibility in my design approach, ensuring that the usability of the product remains uncompromised.
                    </p>
                    <p className='my-4'>
                        My past experiences lends me the ability to communicate effectively across multiple departments and collaborate efficiently in an agile working environment. That’s why i would love to work with the next product team to design solution that users find helpful and we are pleased with.
                    </p>
                </div>
            </section>
            <section className='flex lg:w-8/12 w-full justify-between lg:flex-row flex-col  px-8 mt-8 items-center gap-8' >
                <div className='w-full text-justify'>
                    <h1 className='color1 text-2xl font-bold text-center'>My Journey into the World of Product Design.</h1>
                    <p className='my-4'>
                        I found myself unexpectedly stumbling into the world of product design, embarking on a fascinating journey of creativity and problem-solving. It all began with a simple curiosity and a desire to bring my ideas to life.
                    </p>
                    <p className='my-4'>
                        One day, while browsing the internet, I came across an article discussing the importance of user-centered design and its impact on the success of products. this was where i found out product design isn’t graphic design and it linked me to Interaction Design Foundation website where i got so intrigued by all i saw that i started taking courses on there relating to Product Design.
                    </p>
                    <p className='my-4'>
                        As my passion grew, I sought opportunities to collaborate with others and expand my skills further. I joined local design communities, attended workshops and conferences, and connected with professionals in the field. These interactions allowed me to learn from experienced designers, receive valuable feedback on my work, and gain insights into the industry.
                    </p>
                    <p className='my-4'>
                        Looking back, I am grateful for stumbling into the world of product design. It has become not only a creative outlet but a meaningful way to make a positive impact on people's lives. I continue to explore new techniques, keep up with emerging design trends, and remain open to the unexpected opportunities that lie ahead in this ever-evolving field.
                    </p>
                </div>
                <img src={Ngozi2} alt='shade' width={250} className='rounded-lg mt-4 lg:mt-0 lg:ml-24' />
            </section>
        </>
    )
}

export default About