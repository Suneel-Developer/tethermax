import Image from 'next/image'
import React from 'react'

const ExchangeSlider = () => {
  return (
    <section className='max-w-[840px] w-full mx-auto flex flex-col bg-white mb-[64px]'>
      <div className='overflow-hidden whitespace-nowrap mx-auto w-full flex gap-2 md:gap-3 h-[76px] relative'>
        <div className='comm flex gap-2 md:gap-3'>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bitget.png" alt="bitget" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/okx.png" alt="okx" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bingx.png" alt="bingx" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bitmart.png" alt="bitmart" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/coin-catch.png" alt="coincatch" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <imImageg src="/assets/bitmax.png" alt="bytmex" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bitvenus.png" alt="bitvenus" className='rounded-full' width={72} height={72} />
          </div>

          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/htx.png" alt="htx" className='rounded-full' width={72} height={72} />
          </div>

          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bybit (1).webp" alt="bybit" className='rounded-full' width={72} height={72} />
          </div>

          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/deepcoin.png" alt="deepcoin" className='rounded-full' width={72} height={72} />
          </div>
        </div>

        <div className='comm flex gap-2 md:gap-3'>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bitget.png" alt="bitget" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/okx.png" alt="okx" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bingx.png" alt="bingx" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bitmart.png" alt="bitmart" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/coin-catch.png" alt="coincatch" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bitmax.png" alt="bytmex" className='rounded-full' width={72} height={72} />
          </div>
          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bitvenus.png" alt="bitvenus" className='rounded-full' width={72} height={72} />
          </div>

          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/htx.png" alt="htx" className='rounded-full' width={72} height={72} />
          </div>

          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/bybit (1).webp" alt="bybit" className='rounded-full' width={72} height={72} />
          </div>

          <div className='w-20 md:w-[99.4px]'>
            <Image src="/assets/deepcoin.png" alt="deepcoin" className='rounded-full' width={72} height={72} />
          </div>
        </div>

        <div className='sliderleftsideshadow'></div>
        <div className='sliderrightsideshadow'></div>
      </div>
    </section>
  )
}

export default ExchangeSlider