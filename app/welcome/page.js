import React from 'react'
import Header from '../components/Header'
import Topbar from '../components/Topbar'

const Welcome = () => {
    return (
        <>
            <section>
                <div className='hidden md:block'><Header /></div>
                <div className='block md:hidden'><Topbar /></div>
            </section>
            <section>
                <div className='max-w-[840px] mx-auto w-full flex flex-col gap-9 pt-14 pb-14'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-gray_900 text-[28px] f-pretendard-b leading-[150%] break-keep text-center'>트레이더님을 위한 <br /> <strong className="text-blue_700">환영 선물</strong></h2>
                        <h2 className='text-gray_400 text-[17px] f-pretendard-sm leading-[26px] text-center'>신규 트레이더님을 위한 <br /> <strong className="text-blue_700">최대 10 USDT 랜덤 쿠폰</strong>이 도착했어요!</h2>
                    </div>

                    <div className='w-[240px] h-[240px] mx-auto'>
                        <img src="/assets/welcome.svg" alt="welcome" />
                    </div>
                </div>

                <div className='bg-gray_50'>
                    <div className='pt-8 pb-14 px-6 max-w-[840px] mx-auto w-full gap-3 flex justify-center flex-col items-center'>
                        <img src="/assets/dollar.svg" alt="dollar" />

                        <div className='flex flex-col gap-2 mb-3'>
                            <h2 className='text-gray_900 text-2xl f-pretendard-b text-center break-keep leading-[150%]'>클릭 한번으로 받는 <br /> <strong className="text-blue_700">최대 10 USDT</strong> 랜덤 쿠폰!</h2>
                            <h2 className='text-gray_400 text-[17px] f-pretendard-sm text-center leading-[26px]'>출금이 가능한 USDT 쿠폰이에요</h2>
                        </div>

                        <button type='button' className='bg-blue_700 h-14 text-lg f-pretendard-b px-4 text-white rounded-xl flex justify-center items-center'>최대 10 USDT 받기</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome