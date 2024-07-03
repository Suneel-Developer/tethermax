"use client"
import React from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/navigation';

const WithDrawal = () => {

    const router = useRouter();

    const navigatetohome = () => {
        router.push('/');
    };

    const navigatetoUidlinking = () => {
        router.push('/uidlinking');
    };
    return (
        <div className='bg-gray_50'>
            <Header />

            <section className="max-w-[840px] mx-auto w-full bg-white paybackheight">
                <div className='pt-[180px] pb-4 px-6 flex flex-col items-center justify-between h-full'>
                    <div className='flex flex-col items-center text-center flex-1'>
                        <img src="/assets/Panic.gif" alt="Panic" className='w-20 h-20' />
                        <p className="mt-4 text-gray_400 text-xl leading-[150%] f-pretendard-b">등록한 거래소가 없어요</p>
                    </div>

                    <div className='mt-[25px] md:mb-4 flex items-center gap-4 w-full'>
                        <button className='bg-gray_55 flex-1 h-14 text-lg f-pretendard-b text-gray_700 rounded-xl px-3 flex items-center justify-center' onClick={navigatetohome}>돌아가기</button>
                        <button className='bg-blue_700 flex-1 h-14 text-lg f-pretendard-b text-white rounded-xl px-3 flex items-center justify-center' onClick={navigatetoUidlinking}>거래소 추가하기</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WithDrawal