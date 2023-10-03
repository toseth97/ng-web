import React from 'react'
import { MailQuestionIcon } from 'lucide-react'
import { PhoneCallIcon } from 'lucide-react'

const Contact = () => {
    return (
        <>
            <section className='flex lg:w-3/12 w-full justify-between lg:flex-row flex-col  px-8 mt-8 gap-8 contact' >
                <div className='w-full text-justify'>
                    <div className='relative text-center '>
                        <h1 className='font-bold text-3xl color1'>Get in touch</h1>
                    </div>
                    <p>
                        <span className='flex gap-16 my-4'>
                            <MailQuestionIcon /> <p className=''>ngoziarinze3785@gmail.com</p>
                        </span>
                        <span className='flex gap-16'>
                            <PhoneCallIcon /> <p>+447456261106</p>
                        </span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Contact