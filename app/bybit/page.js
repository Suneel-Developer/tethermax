import React from 'react'
import Hero from '../components/bybit/hero'
import Header from '../components/Header'
import Tabs from '../components/bybit/tabs'

const Bybit = () => {
    return (
        <>
            <Header />
            <section className='bg-gray_50'>
                <div className='flex flex-col max-w-[840px] mx-auto w-full flex-auto'>
                    <Hero />
                    <Tabs />

                </div>
            </section>
        </>
    )
}

export default Bybit