import React from 'react'
import Header from '../components/Header'
import Hero from '../components/htx/hero'
import Tabs from '../components/htx/tabs'

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