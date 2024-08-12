'use client'
import Image from 'next/image'
import React from 'react'
import servw from '../src/assets/hex.svg'
import leaf from '../src/assets/leaf.svg'
import dropdown from '../src/assets/Left-Arrow.svg'
import house from '../src/assets/house.svg'
import bulb from '../src/assets/bulb.svg'
import car from '../src/assets/car.svg'
import renew from '../src/assets/renew.svg'
import { useState } from 'react';


const ServiceComponent = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleDropdownClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the clicked item, close others
    };
    return (
        <div>
            <main id="services" className="service-wrapper flex justify-evenly pr-[120px] pl-[120px]">
                <div className="service-container flex">
                    <section className="service-widget w-[50%] justify-center flex">
                        <Image src={servw} className='w-[65%]' alt='' />
                    </section>
                    <section className="service-details w-[50%]">
                        <h1 className='text-[40px]'>
                            Our Services
                        </h1>
                        <p className='text-[22px] mb-[2rem] mt-[1rem] w-[60%]'>
                            Explore our comprehensive range of professional services
                        </p>
                        <ul className='gap-[3rem] flex flex-col text-[20px]'>
                            <div className='flex flex-col justify-between'>
                                <div className='flex items-center justify-between'>
                                    <section className='flex gap-[20px] cursor-pointer'>
                                        <Image src={leaf} className='h-[30px]' alt='' />
                                        <li>
                                            Sustainable Agriculture
                                        </li>
                                    </section>
                                    <Image src={dropdown} className='cursor-pointer' onClick={() => handleDropdownClick(0)} alt='' />
                                </div>
                                {openIndex === 0 && (
                                    <div className='mt-[1rem] p-[1rem] bg-gray-100'>
                                        <p className='text-[14px]'>
                                            We are a sustainable and innovative agribusiness company and we have been actively engaged in the cocoa value chain, leveraging innovative technologies and sustainable practices to enhance productivity and minimize environmental impact. Looking ahead, we plan to extend our agricultural portfolio to include other high-potential crops such as cassava and oil palm.
                                            One of our key initiatives in this area is the use of solar dryers for our cocoa processing. This eco-friendly technology not only reduces our carbon footprint but also ensures the quality and preservation of the cocoa beans, contributing to the overall sustainability of our supply chain.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className='flex items-center justify-between flex-col'>
                                <div className='flex justify-between w-full'>
                                    <section className='flex gap-[20px] cursor-pointer'>
                                        <Image src={house} className='h-[30px] w-[37px]' alt='' />
                                        <li>
                                            Renewable Energy
                                        </li>
                                    </section>
                                    <Image src={dropdown} className='cursor-pointer' onClick={() => handleDropdownClick(1)} alt='' />
                                </div>
                                {openIndex === 1 && (
                                    <div className='mt-[1rem] p-[1rem] bg-gray-100'>
                                        <p className='text-[14px]'>Alongside our agricultural initiatives, Adimot Resources and Investment Limited is actively engaged in the energy sector, focusing on the development and deployment of renewable energy solutions. Our renewable energy projects span various applications, from powering our own operations to providing affordable and accessible energy solutions to the communities we serve.
                                            Our renewable energy portfolio includes investments in solar, wind, and biomass technologies, as well as the development of energy storage systems and smart grid infrastructure. By prioritizing clean, sustainable energy, we aim to contribute to the global transition away from fossil fuels and towards a low-carbon future.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className='flex items-center justify-between flex-col'>
                                <div className='flex justify-between w-full'>
                                    <section className='flex gap-[20px] cursor-pointer'>
                                        <Image src={bulb} className='h-[30px] w-[37px]' alt='' />
                                        <li>
                                            Sustainable Housing
                                        </li>
                                    </section>
                                    <Image src={dropdown} className='cursor-pointer' onClick={() => handleDropdownClick(2)} alt='' />
                                </div>
                                {openIndex === 2 && (
                                    <div className='mt-[1rem] p-[1rem] bg-gray-100'>
                                        <p className='text-[14px]'>In the housing sector, we are committed to promoting sustainable practices and technologies. Our sustainable housing initiatives aim to create eco-friendly living spaces that minimize resource consumption and carbon emissions.
                                            Our sustainable housing projects incorporate energy-efficient design, renewable energy systems, water conservation measures, and the use of sustainable building materials. We work closely with architects, engineers, and construction partners to ensure that our </p>
                                    </div>
                                )}
                            </div>
                            <div className='flex items-center justify-between flex-col '>
                                <div className='flex justify-between w-full'>
                                    <section className='flex gap-[20px] cursor-pointer'>
                                        <Image src={car} className='h-[30px] w-[37px]' alt='' />
                                        <li>
                                            Sustainable Automobiles
                                        </li>
                                    </section>
                                    <Image src={dropdown} className='cursor-pointer' onClick={() => handleDropdownClick(3)} alt='' />
                                </div>
                                {openIndex === 3 && (
                                    <div className='mt-[1rem] p-[1rem] bg-gray-100'>
                                        <p className='text-[14px]'>Our work in the automobile industry prioritizes the development and adoption of energy-efficient and low-emission vehicles, contributing to a cleaner and more sustainable transportation ecosystem.
                                            Through strategic partnerships and investments, we support the research, development, and commercialization of electric vehicles, hybrid technologies, and advanced propulsion systems. Additionally, we explore innovative mobility solutions, such as car-sharing and last-mile delivery services, to reduce the environmental impact of transportation.
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className='flex items-center justify-between flex-col'>
                                <div className='flex justify-between w-full' >
                                    <section className='flex gap-[20px] cursor-pointer'>
                                        <Image src={renew} className='h-[30px] w-[37px]' alt='' />
                                        <li>
                                            Commitment to Sustainability
                                        </li>
                                    </section>
                                    <Image src={dropdown} className='cursor-pointer' onClick={() => handleDropdownClick(4)} alt='' />
                                </div>
                                {openIndex === 4 && (
                                    <div className='mt-[1rem] p-[1rem] bg-gray-100'>
                                        <p className='text-[14px]'>At Adimot Resources and Investment Limited, sustainability is not just a buzzword, but a core principle that guides all our business activities. We are dedicated to finding innovative solutions that address the pressing environmental challenges of our time, creating a better future for generations to come.
                                            Our commitment to sustainability is reflected in our daily operations, our investment decisions, and our engagement with local communities. We strive to integrate sustainable practices throughout our value chains, fostering a culture of environmental responsibility and social impact.
                                            By aligning our business objectives with the United Nations Sustainable Development Goals, we are working towards a more inclusive, resilient, and sustainable global economy. We believe that sustainable development is not only essential for the well-being of </p>
                                    </div>
                                )}
                            </div>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default ServiceComponent
