import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PartnerExchange from '../components/PartnerExchange'
import Hero from '../components/affiliated/hero'
import ExchangeSlider from '../components/affiliated/exchangeslider'

const Affiliated = () => {
    return (
        <>
            <Header />
            <Hero />
            <ExchangeSlider />

            <section className='max-w-[840px] w-full mx-auto flex flex-col bg-white pb-14'>
                <div className='hidden md:flex flex-col gap-2 flex-auto mb-4'>
                    <h3 className='text-gray_900 f-pretendard-b text-[21px] leading-[32px]'>테더맥스 제휴 거래소</h3>
                    <p className='text-gray_400 f-pretendard-sm text-sm hidden md:block'>페이백은 물론이고 트레이딩 대회까지 준비했어요</p>
                </div>
                <PartnerExchange />
            </section>
            <Footer bgColor='bg-gray_55' />
        </>
    )
}

export default Affiliated