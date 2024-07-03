import React from 'react'
import Header from '../components/Header'
import Hero from '../components/bitget/hero'
import Tabs from '../components/bitget/tabs'

const Bitget = () => {
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

export default Bitget