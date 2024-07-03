import React from 'react'
import Header from '../components/Header'
import Topbar from '../components/Topbar'

const Notefication = () => {
    return (
        <>
            <section>
                <div className='hidden md:block'><Header /></div>
                <div className='block md:hidden'><Topbar /></div>
            </section>
            <section>
                <div className='max-w-[840px] mx-auto w-full flex flex-col gap-9 pt-14 pb-14'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-gray_900 text-[28px] f-pretendard-b leading-[150%] break-keep text-center mb-2'>테더맥스 <br /> <strong className="text-blue_700">알림 ON!</strong></h2>
                        <div className='flex flex-col gap-2 my-8'>
                            <div className='flex items-center justify-center gap-2'>
                                <img src="/assets/celebrate.svg" alt="celebrate" />
                                <h4 className='text-gray_900 text-[15px] f-pretendard-b text-center'>떠먹여주는 혜택!</h4>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <img src="/assets/dollar.svg" alt="dollar" className='w-6 h-6' />
                                <h4 className='text-gray_900 text-[15px] f-pretendard-b text-center'>알림만 켜면 바로 받는 <strong className="text-blue_700">3 USDT</strong> 쿠폰</h4>
                            </div>

                        </div>
                        <img src="/assets/Notification.gif" alt="Notification" className='h-[250px] w-[250px] mx-auto' />
                    </div>
                </div>

                <div className='bg-[#e3f6ea]'>
                    <div className='pt-8 pb-14 px-6 max-w-[840px] mx-auto w-full flex justify-center flex-col items-center'>
                        <h4 className='text-gray_900 text-2xl text-center f-pretendard-b leading-[34px]'>테더맥스는 <br />꼭 필요한 알림만 보내요</h4>

                        <div className='flex flex-col gap-2 mt-6 w-full'>
                            <div className='bg-white py-3 px-4 rounded-xl flex items-center gap-4'>
                                <img src="/assets/logo-blue.svg" alt="logo" />
                                <h4 className='text-gray_900 text-[17px] f-pretendard-b'>페이백 출금</h4>
                            </div>
                            <div className='bg-white py-3 px-4 rounded-xl flex items-center gap-4'>
                                <img src="/assets/gift.svg" alt="gift" />
                                <h4 className='text-gray_900 text-[17px] f-pretendard-b'>거래소 에어드랍 이벤트</h4>
                            </div>
                            <div className='bg-white py-3 px-4 rounded-xl flex items-center gap-4'>
                                <img src="/assets/trophy.svg" alt="trophy" />
                                <h4 className='text-gray_900 text-[17px] f-pretendard-b'>거래소 대규모 상금 대회</h4>
                            </div>
                        </div>

                        <h4 className='text-center text-gray_400 text-xs f-pretendard-b flex items-center justify-center gap-1 mt-6'>
                            <img src="/assets/warning.svg" alt="warning" />
                            알림은 원한다면 언제든지 끌 수 있어요
                        </h4>
                    </div>
                </div>

                <div className='bg-gray_50'>
                    <div className='pt-8 pb-14 px-6 max-w-[840px] mx-auto w-full flex justify-center flex-col items-center'>
                        <h4 className='text-gray_900 text-2xl text-center f-pretendard-b leading-[34px]'><strong className="text-blue_700">테더맥스 앱</strong>에서 <br />알림을 켤 수 있어요</h4>
                        <h3 className='text-gray_400 mt-2 text-[17px] text-center f-pretendard-sm leading-[26px]'>알림 혜택은 앱 전용 이벤트에요</h3>

                        <div className='flex flex-col gap-6 mt-6 rounded-2xl p-3 w-full bg-white'>
                            <div className='flex items-center gap-4'>
                                <div className='w-10 h-10 flex justify-center items-center rounded-full bg-gray_50 p-2'>
                                    <img src="/assets/_logo-blue.svg" alt="logo" />
                                </div>

                                <div>
                                    <h3 className='text-[13px] text-gray_400 f-pretendard-m'>앱 다운로드</h3>
                                    <h3 className='mt-1 text-[17px] text-gray_400 f-pretendard-b leading-[26px]'>테더맥스 앱</h3>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <button className='bg-blue_700 flex-1 text-center text-[15px] f-pretendard-b h-12 rounded-xl px-3 text-white'>구글 스토어</button>
                                <button className='bg-blue_700 flex-1 text-center text-[15px] f-pretendard-b h-12 rounded-xl px-3 text-white'>앱 스토어</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Notefication