import React from 'react'
import Image from 'next/image'
import background from '../src/assets/Rectangle 1.svg'
import backgroundsmall from '../src/assets/mbback.svg'
import logo from '../src/assets/logo.svg'
import link from '../src/assets/link.svg'
import ig from '../src/assets/ig.svg'
import face from '../src/assets/face.svg'
import x from '../src/assets/x.svg'
import slash from '../src/assets/slash.svg'
import reach from '../src/assets/reach.svg'
import dropdown from '../src/assets/dropdown.svg'

const MainComponent = () => {
    return (
        <div>
            <main className="main-component main-wrap relative w-full h-[750px]">
                <nav id='nav' className='navbar-wrapper justify-between w-full flex  absolute top-0 pt-[50px] pl-[90px] pr-[90px]'>
                    <div className="navbrand ">
                        <Image src={logo} height={67} width={262} alt='' />
                    </div>
                    <div className="navlinks items-center flex">
                        <ul className='gap-[42px] text-[white] text-[17px] cursor-pointer flex font-semibold'>
                            <li>
                                About
                            </li>
                            <li>
                                Services
                            </li>
                            <li>
                                Company
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </div>
                    <section className='dropdown items-center flex'>
                        <Image src={dropdown} alt='' />
                    </section>
                </nav>
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
                        <button className='learn bg-[#053D60BF] rounded-md w-[150px] h-[45px] mt-[50px] font-semibold'>
                            Learn more
                        </button>
                    </div>
                </section>
                <div className='absolute top-[571px] right-0 flex flex-col items-end'>
                    <Image src={slash} className='slash' alt='' />
                    <Image src={reach} className='right-[50px] top-[50px] cursor-pointer w-[115px] absolute' alt='' />
                </div>
                <Image className='w-full bg-full bgfs' src={background} height={500} style={{ width: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
                <Image className='w-full bg-full bgmb' src={backgroundsmall} height={500} style={{ width: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} alt='' />
            </main>
        </div>
    )
}

export default MainComponent
