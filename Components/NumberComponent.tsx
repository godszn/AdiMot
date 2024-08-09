import React from 'react'
import Image from 'next/image'
import pro from '../src/assets/chart.svg'
import client from '../src/assets/rock.svg'
import country from '../src/assets/world.svg'

const NumberComponent = () => {
    return (
        <div>
            <main className="number-wrapper  p-[120px] pt-[70px] pb-[30px] flex flex-col">
                <div className="number-header">
                    <h1 className=' text-center text-[40px] pt-[65px] mb-[50px] ' style={{ borderTop: '1px solid black' }}>
                        See Our Numbers
                    </h1>
                </div>
                <div className="number-widgets gap-[80px] flex">
                    <section className='flex flex-col text-[#053D60BF] text-center'>
                        <Image src={pro} alt='' />
                        <h1 className='text-[50px]'>
                            310+
                        </h1>
                        <h3 className='text-[20px]'>
                            Projects
                        </h3>
                    </section>
                    <section className='flex flex-col text-[#053D60BF] text-center'>
                        <Image src={client} alt='' />
                        <h1 className='text-[50px]'>
                            121+
                        </h1>
                        <h3 className='text-[20px]'>
                            Satisfied Clients
                        </h3>
                    </section>
                    <section className='flex flex-col text-[#053D60BF] text-center'>
                        <Image src={country} className='mb-[.9rem] the' alt='' />
                        <h1 className='text-[50px]'>
                            12+
                        </h1>
                        <h3 className='text-[20px]'>
                            Countries
                        </h3>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default NumberComponent
