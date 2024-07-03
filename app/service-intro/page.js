import React from 'react'
import Hero from '../components/service/hero'
import Header from '../components/service/Header'
import SellingPoints from '../components/service/sellingPoints'
import CashbankProcces from '../components/service/cashbankProcces'
import TradingFees from '../components/service/tradingFees'

const ServiceIntro = () => {
  return (
    <div className='bg-[#17181c]'>
      <Header />

      <div className='max-w-[840px] w-full mx-auto flex flex-col'>
        <Hero />
        <SellingPoints />
        <CashbankProcces />
        <TradingFees />
      </div>
    </div>
  )
}

export default ServiceIntro