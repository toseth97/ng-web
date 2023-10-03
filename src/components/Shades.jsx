import React from 'react'
import shades from "../static/images/Shades.png"
import chats from "../static/images/chats.png"


const Shades = () => {
    return (
        <>
            <section className='w-full flex items-center justify-center p-8 bg-slate-900'>
                <div className='shadeLogo text-center text-white flex justify-center items-center'>
                    <h1 className='font-bold text-3xl'>Shades</h1>
                    <div className='absolute bg-red-500 barge flex justify-center items-center'><p>3</p></div>
                </div>
            </section>
            <section className='lg:w-8/12 w-11/12'>
                <h1 className='mt-8 text-3xl font-bold my-4'>Shades: Socialization among African Immigrants in the United Kingdom - A UX Case Study</h1>
                <h1 className='font-bold text-xl mt-4'>Overview — What is Shades?</h1>
                <p>Shades is a social mobile app designed to help African immigrants socialize better by finding genuine friendships, companionship, and relationships in the UK.</p>
            </section>
            <section className='flex lg:w-8/12 w-full justify-between lg:flex-row flex-col lg:px-24 md:px-16 px-8 mt-8 items-center' >

                <img src={shades} alt='shade' className='rounded-lg mt-4 lg:mt-0' />
            </section>
            <section className='lg:w-8/12 w-11/12 text-justify'>
                <p className='mt-8'>I designed Shades to address the current needs of recent African immigrants who struggle to make friends, build a connection, and
                    start a relationship with people who look like them or like people like them and have similar interests. Shades is a passion project.
                </p>

                <div>
                    <h1 className='font-bold text-xl my-2'>My role as a UI/UX Designer</h1>
                    <p>As the sole Designer on this project, I wore several hats working as a UX Researcher, UX Designer, UX writer, and UI Designer to design the full user experience of the shades mobile app while also working with software tools like Figma, Figjam, Notion, and Google forms which helped me in every step of the design process. This project was done within a Two-week time-frame.</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl my-2'>The Problem</h1>
                    <p>Socialization has become a struggle among migrating and immigrant Africans in the UK. Due to the demands of work, school, and
                        business, Africans in the UK have often found it difficult to meet with people of similar interests and build a connection or relationship to serve the emotional and relational part of their life. Shades aims to bridge the gap between this problem.</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl my-2'>Why?</h1>
                    <p>Existing using pain points.</p>
                    <p>Gotten from competitors review on app store, trustpilot and twitter. Here some users were complaining about the app being all about finding partners instead of friends.</p>
                </div>

            </section>
            <section className='flex lg:w-8/12 w-full justify-between lg:flex-row flex-col lg:px-24 md:px-16 px-8 mt-8 items-center' >

                <img src={chats} alt='chats' className='rounded-lg mt-4 lg:mt-0' />
            </section>
            <section className='lg:w-8/12 w-11/12 mt-8'>
                <h1 className='my-2 font-bold text-xl'>The solution and potential targets:</h1>
                <p>Shades is a social mobile app designed to help African immigrants socialize better by finding genuine friendships, companionship, and
                    relationships in the UK with a focus on personalized experiences that works just for any one.</p>
                <h1 className='my-2 font-bold text-2xl'>Design process</h1>
                <ul className='list-disc ml-8'>
                    <li>Empathise </li>
                    <li>Define</li>
                    <li>Ideate</li>
                    <li>Design</li>
                    <li>Testing</li>
                </ul>
                <h1 className='my-2 text-2xl'>Emphathise</h1>
                <h1 className='my-2 text-xl'>The target audience</h1>
                <p>I segmented users into two user groups and they are:</p>

            </section>

        </>
    )
}

export default Shades