"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

const Coupon = () => {
    const router = useRouter();

    const navigatetoBenefit = () => {
        router.push('/benefit');
    };
    return (
        <div className='bg-gray_50'>
            <Header />

            <section className="max-w-[840px] mx-auto w-full bg-white paybackheight">
                <div className='pt-[180px] pb-4 px-6 flex flex-col items-center justify-between h-full'>
                    <div className='flex flex-col items-center text-center flex-1'>
                        <img src="/assets/svgexport.svg" alt="svgexport" className='w-[76px]' />
                        <p className="mt-4 text-gray_400 text-2xl leading-[150%] f-pretendard-b">받은 쿠폰이 없어요</p>
                    </div>

                    <div className='mt-[25px] md:mb-4 flex items-center gap-4 w-full'>
                        <button className='bg-blue_700 flex-1 h-14 text-lg f-pretendard-b text-white rounded-xl px-3 flex items-center justify-center' onClick={navigatetoBenefit}>쿠폰 받으러 가기</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Coupon