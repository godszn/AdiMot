import React from 'react'
import Image from 'next/image'
import fback from '../src/assets/footerimg.svg'
import line from '../src/assets/Rectangle 14.svg'
import logo from '../src/assets/logo.svg'
import link from '../src/assets/link.svg'
import ig from '../src/assets/ig.svg'
import face from '../src/assets/face.svg'
import x from '../src/assets/x.svg'
import phone from '../src/assets/phone.svg'
import mail from '../src/assets/mail.svg'
import fbacksmall from '../src/assets/footermb.svg'


const FooterComponent = () => {
    return (
        <div>
            <main className="footer-wrapper flex relative mt-[75px] ">
                <Image className='w-full bg-full footerbg' src={fback} height={500} style={{ width: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
                <Image className='w-full bg-full footermb' src={fbacksmall} height={500} style={{ width: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
                <div className="footer-content flex absolute top-[40%] w-full justify-between text-white  pr-[70px]  pl-[70px]">
                    <section className='logs-container gap-[25px] flex flex-col'>
                        <Image src={logo} alt='' />
                        <div className="socials ml-[25px] gap-[40px] flex">
                            <Image src={link} alt='' height={30} />
                            <Image src={ig} alt='' height={30} />
                            <Image src={face} alt='' height={30} />
                            <Image src={x} alt=' ' height={30} />
                        </div>
                    </section>
                    <section className='flex flex-col gap-[20px]'>
                        <h1 className='text-[35px]'>
                            Contact
                        </h1>
                        <div className='gap-[20px]'>
                            <section className='flex gap-[5px] items-center'>
                                <Image src={phone} height={20} alt='' />
                                <p>
                                    +234801272819
                                </p>
                            </section>
                            <section className='flex gap-[5px] items-center'>
                                <Image src={mail} height={15} alt='' />
                                <p>
                                    example@email.com
                                </p>
                            </section>
                        </div>
                    </section>
                    <section className='gap-[10px] flex flex-col justify-center'>
                        <p>
                            TERMS & CONDITIONS
                        </p>
                        <p>
                            PRIVACY STATEMENT
                        </p>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default FooterComponent
