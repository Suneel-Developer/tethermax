import React from 'react'

const Hero = () => {
  return (
    <section className="pt-[52px]">
        <p className="text-[17px] text-center px-6 f-pretendard-b text-white leading-[150%]">가장 똑똑하게 거래소를 이용하는 방법</p>
        <p className="text-[32px] text-center px-6 f-pretendard-b text-white leading-[150%]">트레이더님의 <br/> <strong className="text-blue_700">안정적인 선물거래</strong>를 <br/>위한 테더맥스</p>

        <div className='pt-[72px] flex justify-center items-center flex-wrap gap-2 px-1'>
            <div className='h-[249px] w-[187px] rounded-[50px] flex flex-col justify-center items-center border-2 border-gray_900 gap-4'>
                <img src="/assets/introductioncard.webp" alt="introductioncard" className='rounded-[50px] object-cover w-full h-full' />
            </div>
            <div className='h-[249px] w-[187px] rounded-[50px] flex flex-col justify-center items-center border-2 border-gray_900 gap-4'>
                <img src="/assets/introductioncard2.webp" alt="introductioncard" className='rounded-[50px] object-cover w-full h-full' />
            </div>
            <div className='h-[249px] w-[187px] rounded-[50px] flex flex-col justify-center items-center border-2 border-gray_900 gap-4'>
                <img src="/assets/introductioncard3.webp" alt="introductioncard" className='rounded-[50px] object-cover w-full h-full' />
            </div>
        </div>
    </section>
  )
}

export default Hero