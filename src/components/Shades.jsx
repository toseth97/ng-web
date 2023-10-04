import React from 'react'
import shades from "../static/images/Shades.png"
import chats from "../static/images/chats.png"
import User1 from "../static/images/shade_user1.png"
import User2 from "../static/images/shade_user2.png"
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
                <ul className='ml-8'>
                    <li><span>&#9658;</span>&nbsp;Empathise </li>
                    <li><span>&#9658;</span>&nbsp;Define</li>
                    <li><span>&#9658;</span>&nbsp;Ideate</li>
                    <li><span>&#9658;</span>&nbsp;Design</li>
                    <li><span>&#9658;</span>&nbsp;Testing</li>
                </ul>
                <h1 className='my-2 text-3xl font-bold'>Emphathise</h1>
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
                    <p className='text-justify text-sm'>The goal of this research was to understand and find out how Africans in the UK approach and engage in Socialization. I found out that
                        60% of the research participants struggle with socialization in the UK.</p>
                    <li>Describe the people you spoke with and how?</li>
                    <p className='text-justify text-sm'>I interviewed 5 participants by collecting their responses to the research questions remotely through a Survey.</p>
                    <li>Describe how you gathered the data.</li>
                    <p className='text-justify text-sm'>I gathered user data through Google Forms.</p>
                    <li>Describe the type of analysis you’ll be using to extract insights from this data.</li>
                    <p className='text-justify text-sm'>I will be using data analysis and affinity mapping to extract insights and distil these insights into user stories and scenarios
                    </p>
                    <li>Summarize findings.</li>
                    <p className='text-justify text-sm'>These findings helped me to create user personas that are living and breathing whom I will be designing a solution for.</p>
                </ul>

            </section>
            <section className='lg:w-8/12 w-11/12 mt-8 '>

                <h1 className='my-2 text-3xl font-bold'>Define</h1>
                <h1 className='my-2 text-2xl font-bold'>User Persona</h1>
                <p>After i had successfully conducted and concluded research. i created user personas. This process aids in ensuring design decisions align with the needs and preferences of the intended users.</p>
                <div className='w-full flex justify-center items-center flex-col'>
                    <div className='w-11/12'>
                        <p className='font-bold my-4'>User Persona 1</p>

                        <div className='flex w-full justify-center items-center'>
                            <div className=' rounded bg-gray-100 p-8 flex justify-between gap-8 lg:flex-row flex-col'>
                                <div className='rounded mt-4 lg:mt-0 relative'>
                                    <img src={User1} alt='shade' />
                                    <div className=' w-full absolute bottom-5 bg-gray-900/50 rounded px-8 py-4 text-white'>
                                        <h1 className='font-bold text-2xl'>Idowu A.</h1>
                                        <p className='text-sm'>Healthcare Assistant</p>
                                        <p className='text-sm'>Idowu wants to meet people of like minds. </p>
                                    </div>
                                </div>
                                <div className='flex text-sm flex-col w-full'>
                                    <div>
                                        <p className='font-bold my-2'>About Idowu A.</p>
                                        <div className='rounded bg-sky-200 p-2'>
                                            <div className='my-2 opacity-70 flex justify-between items-center lg:flex-row flex-col'>
                                                <p>Age: 32</p>
                                                <p>Education: Nursing</p>
                                                <p>Address: United Kingdom</p>
                                            </div>
                                            <p>Idowu is an Ethiopian healthcare assistant with NHS who lives and works in the UK. Idowu majorly socializes in school as she’s also in school for a masters degree in Nursing. Idowu is actively involved in her school and church activities. She goes out of her way to attend activities and functions.</p>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex lg:flex-row flex-col text-sm gap-4 '>
                                            <div>
                                                <p className='font-bold my-2'>Goal</p>
                                                <div className='rounded bg-sky-200 p-2'>
                                                    <ul>
                                                        <li><span className='text-xl text-green-400'>&#9658;</span>&nbsp;Idowu wants to meet people of like minds.</li>

                                                        <li><span className='text-xl text-green-400'>&#9658;</span>&nbsp;

                                                            Idowu is an introvert who wants to be able to explore her city outside of school and church with someone interesting.
                                                        </li>
                                                        <li><span className='text-xl text-green-400'>&#9658;</span>&nbsp;
                                                            Idowu would needs a simple app that puts her in control and will help her manage and navigate finding someone who shares same interests for a romantic relationship.
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>
                                            <div>
                                                <p className='font-bold my-2'>Fraustrations</p>
                                                <div className='rounded bg-sky-200 p-2'>
                                                    <ul>
                                                        <li><span className='text-xl text-red-400'>&#9658;</span>&nbsp;Idowu has long work hours and school schedules that prevents her from meeting new people.</li>

                                                        <li><span className='text-xl text-red-400'>&#9658;</span>&nbsp;

                                                            Idowu gets scared of rejection and cultural differences when she wants to approach and meet new people due to her Ethiopian roots.
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center flex-col'>
                    <div className='w-11/12'>
                        <p className='font-bold my-4'>User Persona 2</p>

                        <div className='flex w-full justify-center items-center'>
                            <div className=' rounded bg-gray-100 p-8 flex justify-between gap-8 lg:flex-row flex-col'>
                                <div className=' mt-4 lg:mt-0 relative'>
                                    <img src={User2} alt='shade' />
                                    <div className=' w-full absolute bottom-10 bg-gray-900/50 rounded px-8 py-4 text-white'>
                                        <h1 className='font-bold text-2xl'>Chima T.</h1>
                                        <p className='text-sm'>Customer Service Advisor</p>
                                        <p className='text-sm'>Become a person of rare attractive values
                                            and first-hand valuable information.</p>
                                    </div>
                                </div>
                                <div className='flex text-sm flex-col w-full'>
                                    <div>
                                        <p className='font-bold my-2'>About Chima T.</p>
                                        <div className='rounded bg-sky-200 p-2'>
                                            <div className='my-2 opacity-70 flex justify-between items-center lg:flex-row flex-col'>


                                                <p>Age: 35</p>
                                                <p>Education: Economics</p>
                                                <p>Address: United Kingdom</p>
                                            </div>
                                            <p>Chima is a Biracial Nigerian customer service lead that currently lives in the UK. He is 35 years old, is involved in Child care services and loves to establish relativeness when meeting new people. He was born to a Nigerian Dad and a German mom. He currently struggles to socialize and has just Whatsapp as a means of communication which is often limited. He has strong personal values and a desire to learn. He often brings along food and drinks when he wants to meet new people.</p>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex lg:flex-row flex-col text-sm gap-4 '>
                                            <div>
                                                <p className='font-bold my-2'>Goal</p>
                                                <div className='rounded bg-sky-200 p-2'>
                                                    <ul>


                                                        <li><span className='text-xl text-green-400'>&#9658;</span>&nbsp;Chima would love to meet people that hold the same personal values as him.</li>

                                                        <li><span className='text-xl text-green-400'>&#9658;</span>&nbsp;
                                                            Chima would needs a simple app that will help him find people in his vicinity who he can also bond with in real life.
                                                        </li>


                                                    </ul>

                                                </div>
                                            </div>
                                            <div>
                                                <p className='font-bold my-2'>Frustrations</p>
                                                <div className='rounded bg-sky-200 p-2'>
                                                    <ul>



                                                        <li><span className='text-xl text-red-400'>&#9658;</span>&nbsp;Chima has long work hour schedules
                                                            that prevents him from meeting new
                                                            people.</li>

                                                        <li><span className='text-xl text-red-400'>&#9658;</span>&nbsp;

                                                            Chima has just Whatsapp as a
                                                            means of socialization.
                                                        </li>
                                                        <li><span className='text-xl text-red-400'>&#9658;</span>&nbsp;

                                                            Chima is involved in Childcare and
                                                            academics when he has time off from
                                                            work due to lack of companionship.
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>



        </>
    )
}

export default Shades