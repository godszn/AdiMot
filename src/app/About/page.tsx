'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import mission from '../../assets/mision.svg'
import vision from '../../assets/vision.svg'
import drop from '../../assets/drop.svg'
import polyg from '../../assets/Polygon.svg'
import background from '../../assets/bgabout.svg'
import Link from 'next/link'

const Page = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div>
            <div className="about-wrapper relative bg-[#c4bdbd40] p-[80px]">
                <nav className='flex justify-end'>
                    <Link href='/'>
                        <Image src={drop} height={30} alt='' />
                    </Link>
                </nav>
                <section className="about-header flex">
                    <div className='w-[50%] flex justify-center'>
                        <Image src={polyg} className='w-[50%]' alt='' />
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='text-[40px] text-center'>
                            About Us
                        </h1>
                        <p className='text-[18px] mt-[50px]'>
                            Adimot Resources and Investment Limited is a sustainability-focused company with a
                            diverse portfolio of operations in the agriculture, energy, housing, and automobile sectors.
                            Founded in 2007, our mission is to pioneer sustainable solutions that create long-term value for our
                            stakeholders and the environment.
                            {isExpanded && (
                                <>
                                    <span> Guided by our commitment to sustainability, we leverage cutting-edge technologies,
                                        innovative business models, and strategic partnerships to develop and scale sustainable practices across our areas of
                                        operation. Our interdisciplinary approach allows us to create synergies and drive progress towards a greener,
                                        more resilient future. At the heart of our company is a team of passionate,
                                        forward-thinking professionals with a deep understanding of sustainability challenges and opportunities.
                                        We are driven by the belief that sustainable development is not only essential for the well-being of our planet but
                                        also presents significant economic and social benefits.</span>
                                </>
                            )}
                        </p>
                        <div className=''>
                            <button onClick={toggleReadMore} className='bg-[#053D60BF] text-[white] h-[40px] w-[120px] rounded-[.3rem] mt-[20px]'>
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    </div>
                </section>
                <section className="mission flex justify-end mt-[100px]">
                    <div className="mission-text w-[45%]">
                        <h1 className='text-[30px]'>
                            Mission
                        </h1>
                        <p className='text-[20px] w-[56%] mt-[10px]'>
                            To accelerate the transition to a sustainable economy by investing in and operating innovative,
                            eco-friendly businesses across key sectors,
                            while fostering sustainable practices and technologies that address the challenges of climate change.
                        </p>
                    </div>
                    <div className="mission-widget w-[45]">
                        <Image src={mission} className='w-[64%]' alt='' />
                    </div>
                </section>
                <section className="vision flex flex-row-reverse mt-[100px]">
                    <div className="vision-text flex justify-center flex-col w-[45%]">
                        <h1 className='text-[30px]'>
                            Vision
                        </h1>
                        <p className='text-[20px] w-[66%] mt-[10px]'>
                            To be the leading sustainability-focused investment and development company, driving positive change and creating a more resilient future.
                        </p>
                    </div>
                    <div className="mission-widget w-[45%]">
                        <Image src={vision} className='w-[64%]' alt='' />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Page
