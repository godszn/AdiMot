'use client'
import React from 'react'
import Image from 'next/image'
import background from '../src/assets/background.svg'
import backgroundsmall from '../src/assets/bgsmall.svg'
import logo from '../src/assets/logo.svg'
import link from '../src/assets/link.svg'
import ig from '../src/assets/ig.svg'
import face from '../src/assets/face.svg'
import x from '../src/assets/x.svg'
import close from '../src/assets/close.svg'
import dropdown from '../src/assets/dropdown.svg'
import Link from 'next/link'
import { useState } from 'react';

const MainComponent = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <main className="main-component main-wrap relative w-full h-[750px]">
                <nav id='nav' className='navbar-wrapper justify-between w-full flex  absolute top-0 pt-[50px] pl-[90px] pr-[90px]'>
                    <div className="navbrand ">
                        <Image src={logo} height={67} width={262} alt='' />
                    </div>
                    <div className="navlinks items-center flex">
                        <ul className='gap-[42px] text-[white] text-[17px] cursor-pointer flex font-semibold'>
                            <Link href='/About'>
                                <li>
                                    About
                                </li>
                            </Link>
                            <Link href='#services'>
                                <li>
                                    Services
                                </li>
                            </Link>
                            <Link href='#company'>
                                <li>
                                    Company
                                </li>
                            </Link>
                            <Link href='#contact'>
                                <li>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <section className='dropdown items-center flex'>
                        <Image src={dropdown} alt='' onClick={toggleMenu}  />
                    </section>
                </nav>
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#053D60',
                        display: menuOpen ? 'flex' : 'none',
                        flexDirection: 'column',
                        color: 'white',
                        fontSize: '25px',
                        gap: '25px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        transition: 'all 0.3s ease',
                    }}>
                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            textAlign: 'center',
                        }}
                    >
                        <div className= 'flex end absolute top-[5%] right-[8%] h-[30px]'>
                            <Image src={close} onClick={toggleMenu}  alt =''/>
                        </div>
                        <li onClick={toggleMenu} style={{ margin: '20px 0' }}>
                            <Link href="/About">About</Link>
                        </li>
                        <li onClick={toggleMenu} style={{ margin: '20px 0' }}>
                            <Link href="#services">Services</Link>
                        </li>
                        <li onClick={toggleMenu} style={{ margin: '20px 0' }}>
                            <Link href="#company">Company</Link>
                        </li>
                        <li onClick={toggleMenu} style={{ margin: '20px 0' }}>
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <section className="main-wrappertext flex absolute top-[200px] pl-[90px] pr-[90px] ">
                    <div className="socials gap-[40px] flex flex-col">
                        <Image src={link} alt='' />
                        <Image src={ig} alt='' />
                        <Image src={face} alt='' />
                        <Image src={x} alt='' />
                    </div>
                    <div className="main-text flex flex-col ml-[90px] text-[white]">
                        <h1 className='text-[60px] w-[70%]'>
                            The best solution for every sector problem.
                        </h1>
                        <Link href='#services'>
                            <button className='learn bg-[#053D60BF] rounded-md w-[150px] h-[45px] mt-[50px] font-semibold'>
                                Learn more
                            </button>
                        </Link>
                    </div>
                </section>
                <Image className='w-full bg-full bgfs' src={background} height={500} style={{ width: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
                <Image className='w-full bg-full bgmb' src={backgroundsmall} height={500} style={{ width: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            </main>
        </div>
    )
}

export default MainComponent
