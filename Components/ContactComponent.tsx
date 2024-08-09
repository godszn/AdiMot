import React from 'react'
import Image from 'next/image'
import contact from '../src/assets/contact.svg'

const ContactComponent = () => {
    return (
        <div>
            <main id='contact' className="Contact-wrapper flex flex-col mt-[70px] m-[120px] pb-[30px] ">
                <section className="contact-header flex flex-col">
                    <h1 className=' text-center text-[40px] pt-[50px] mb-[30px] ' style={{ borderTop: '1px solid black' }}>
                        Contact Us
                    </h1>
                    <div className='flex justify-center'>
                        <p className='text-center w-[50%]'>
                            We are poised to help your business scale and blow up! Through Creative Ideas,
                            Innovation & Sheer Determination. Let’s lead you into the future!
                        </p>
                    </div>
                </section>
                <div className="contact-container gap-[4rem] flex">
                    <div className="contact-widget w-[50%]">
                        <Image src={contact} alt='' />
                    </div>
                    <div className="contact-form w-[380px] justify-center mt-[90px] p-[1.5rem] h-[400px]" style={{ boxShadow: '1px 2px 10px #00000040', borderRadius: '1rem' }}>
                        <section className='form-wrapper'>
                            <div className="personal w-[100%]">
                                <div className="nameform gap-[1rem] text-black flex">
                                    <input type="text" placeholder='First Name' className='w-[160px] h-[45px] text-center' style={{ borderRadius: '.8rem', border: '1px solid #00000040', outline: 'none' }} />
                                    <input type="text" placeholder='Last Name' className='w-[160px] h-[45px] text-center' style={{ borderRadius: '.8rem', border: '1px solid #00000040', outline: 'none' }} />
                                </div>
                                <div className="nameform gap-[1rem] text-black flex mt-[20px]">
                                    <input type="text" placeholder='Work Email' className='w-[160px] h-[45px] text-center' style={{ borderRadius: '.8rem', border: '1px solid #00000040', outline: 'none' }} />
                                    <input type="text" placeholder='Phone Number' className='w-[160px] h-[45px] text-center' style={{ borderRadius: '.8rem', border: '1px solid #00000040', outline: 'none' }} />
                                </div>
                            </div>
                            <div className="company gap-[25px] flex flex-col mt-[40px]">
                                <input type="text" placeholder='Company Email' className='w-[100%] h-[45px] pl-[10px]' style={{ borderRadius: '.8rem', border: '1px solid #00000040', outline: 'none' }} />
                                <input type="text" placeholder='Your Message' className='w-[100%] h-[45px] pl-[10px]' style={{ borderRadius: '.8rem', border: '1px solid #00000040', outline: 'none' }} />
                            </div>
                            <button className='w-full bg-[#053D60BF] text-white h-[45px] text-[19px] mt-[30px] text-center' style={{borderRadius: '.8rem', outline: 'none'}}>
                                submit
                            </button>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ContactComponent
