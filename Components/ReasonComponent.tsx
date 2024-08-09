import React from 'react'
import Image from 'next/image'
import why from '../src/assets/why.svg'
import check from '../src/assets/check.svg'

const ReasonComponent = () => {
    return (
        <div>
            <main id="company" className="reason-wrapper m-[120px] pb-[30px] flex flex-col">
                <h1 className='reason-header text-center text-[40px] pt-[65px] mb-[50px] ' style={{borderTop: '1px solid black'}}>
                    Why Us
                </h1>
                <div className="reason-components flex">
                    <section className="reason-widget w-[50%]">
                        <Image src={why} className = 'w-[61%]' alt='' />
                    </section>
                    <section className="reason-text w-[50%]">
                        <div className="reason-text-header w-[76%] flex flex-col gap-[30px]">
                            <h2 className= 'text-[30px]'>
                                The AdiMot advantage:
                                reasons to trust our expertise
                            </h2>
                            <h3 className = 'text-[20px]'>
                                Our open, positive, and proactive approach helps
                                us find ways to align your work environment with the culture
                            </h3>
                        </div>
                        <div className="reason-list mt-[20px]">
                            <ul className='gap-[20px] flex flex-col'>
                                <section className='flex items-center gap-[10px]'>
                                    <Image src={check} height={32} alt='' />
                                    <li>Cloud Solution</li>
                                </section>
                                <section className='flex items-center gap-[10px]'>
                                    <Image src={check} height={32} alt='' />
                                    <li>Performance Excellence</li>
                                </section>
                                <section className='flex items-center gap-[10px]'>
                                    <Image src={check} height={32} alt='' />
                                    <li>Community Development</li>
                                </section>
                                <section className='flex items-center gap-[10px]'>
                                    <Image src={check} height={32} alt='' />
                                    <li>Food Security</li>
                                </section>
                                <section className='flex items-center gap-[10px]'>
                                    <Image src={check} height={32} alt='' />
                                    <li>Renewable Sources</li>
                                </section>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default ReasonComponent
