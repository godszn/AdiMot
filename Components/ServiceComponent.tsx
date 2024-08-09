'use client'
import Image from 'next/image'
import React from 'react'
import servw from '../src/assets/servw.svg'
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
            <main className="service-wrapper flex justify-evenly pr-[120px] pl-[120px]">
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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
                                    <Image src={dropdown} className='cursor-pointer'onClick={() => handleDropdownClick(3)}  alt='' />
                                </div>
                                {openIndex === 3 && (
                                    <div className='mt-[1rem] p-[1rem] bg-gray-100'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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
