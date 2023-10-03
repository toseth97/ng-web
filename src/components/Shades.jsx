import React from 'react'
import shades from "../static/images/Shades.png"
import chats from "../static/images/chats.png"
import shadeChart from "../static/images/shade_chart.png"


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
            <section className='flex lg:w-8/12 w-full justify-center lg:flex-row flex-col lg:px-24 md:px-16 px-8 mt-8 items-center' >

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
                <h1 className='my-2 text-2xl font-bold'>Emphathise</h1>
                <h1 className='my-2 font-bold'>The target audience</h1>
                <p>I segmented users into two user groups and they are:</p>
                <ul className='list-circle ml-8'>
                    <li className='text-justify'>
                        Primary users: People in the age of 18-60 who want to partner up and build a relationship with someone of similar interests.
                    </li>
                    <li className='text-justify'>
                        Secondary users: People in the age 18-45 who want to meet new people and create a spark for the goal of friendship and
                        companionship.
                    </li>
                </ul>
                <h1 className='font-bold my-2 mt-2'>Hypothesis</h1>
                <p className='text-justify'>African immigrants want to find and partner up with people that are compatible with them and build a connection that can develop into a relationship or just mainly friendships and companionships.</p>
                <h1 className='font-bold my-2 mt-2'>Quantity Survey</h1>
                <p className='text-justify'>
                    Understanding the problem space was very important for me and to get started with research, I conducted a remote survey to collect some numbers and real time data. The survey was filled by 5 African immigrants and these insights helped me further, throughout the project.

                </p>

            </section>
            <section className='flex bg-green-100 lg:w-8/12 w-full justify-center lg:flex-row flex-col lg:px-24 md:px-16 px-8 mt-8 items-center rounded' >

                <img src={shadeChart} alt='chart' className='rounded-lg mt-4 lg:mt-0' />
            </section>
            <section className='lg:w-8/12 w-11/12 mt-8'>

                <h1 className='my-2 text-2xl font-bold'>Survey questions</h1>

                <ul className='list-square ml-8'>
                    <li>How do you socialize in the UK?</li>
                    <li className='text-justify'>
                        What do you hope to accomplish when you reach out to someone for the first time?

                    </li>
                    <li className='text-justify'>
                        What is most important to you when it comes to socialization and meeting new people?
                    </li>
                    <li className='text-justify'>
                        What actions do you take to meet your goal of socialization at any time?
                        What mood, feeling, situation, or event often leads you to want to socialize?
                    </li>
                    <li className='text-justify'>
                        What does your day-to-day routine look like?
                        What situation, or thing prevents you from accomplishing your goal of meeting and connecting with new people?️
                    </li>
                    <li>What do you do for work?</li>
                </ul>
                <h1 className='my-2 text-2xl font-bold'>Key survey insights</h1>

                <ul className='list-circle ml-8'>
                    <li className='text-justify'>60% of the immigrants interviewed socialised through school, churches and catching up on whatsapp, 40% just works and stay home when there’s nothing to do.</li>
                    <li className='text-justify'>50% of them just want to make friends while the other 50% will like to date.</li>
                    <li className='text-justify'>50% will  like to meet people with similar ideals, 25% prefers someone from the same nationality while the other 25% are open to explore.</li>
                    <li className='text-justify'>25% are scared of rejection, 50% work long hours and the other 25% are not sure where to start from,</li>
                    <li className='text-justify'>100% of the people interview miss home and often feel lonely which makes them want to meet new people whether for dating or friends.</li>
                </ul>
                <h1 className='my-2 text-2xl font-bold'>Research Summary</h1>

                <ul className='list-circle ml-8'>
                    <li>What was the goal of the research?</li>
                    <p className='text-justify'>The goal of this research was to understand and find out how Africans in the UK approach and engage in Socialization. I found out that
                        60% of the research participants struggle with socialization in the UK.</p>
                    <li>Describe the people you spoke with and how?</li>
                    <p className='text-justify'>I interviewed 5 participants by collecting their responses to the research questions remotely through a Survey.</p>
                    <li>Describe how you gathered the data.</li>
                    <p className='text-justify'>I gathered user data through Google Forms.</p>
                    <li>Describe the type of analysis you’ll be using to extract insights from this data.</li>
                    <p className='text-justify'>I will be using data analysis and affinity mapping to extract insights and distil these insights into user stories and scenarios
                    </p>
                    <li>Summarize findings.</li>
                    <p className='text-justify'>These findings helped me to create user personas that are living and breathing whom I will be designing a solution for.</p>
                </ul>

            </section>

        </>
    )
}

export default Shades