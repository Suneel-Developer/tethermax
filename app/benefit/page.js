import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'

const Benefit = () => {
    return (
        <section className="benefitbg relative min-h-[100dvh] flex flex-col">
            <Header />
            <div className='max-w-[840px] w-full mx-auto z-30'>
                <div className='pt-8 md:pt-14 md:px-5 pb-[64px] md:pb-24'>
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className='text-blue_700 text-center mb-1 f-pretendard-sm leading-[150%]'>테더맥스 혜택</h3>
                        <h3 className='text-gray_900 text-[32px] text-center f-pretendard-b leading-[150%]'>테더맥스 혜택 수행하고 <br /> <strong className="benefittext">USDT 모으기!</strong></h3>
                        <img src="/assets/benefit_top.webp" alt="benefit_top" className='mt-6 mb-8 w-[220px] h-[194px]' />
                    </div>

                    <div className='pb-5 md:pb-10 px-5 border-b md:border-none border-gray_55 flex items-center justify-between'>
                        <div className='flex flex-col gap-1'>
                            <p className="text-gray_500 f-pretendard-m text-[15px]">남은 최대 혜택</p>
                            <p className="text-blue_700 f-pretendard-b text-[27px]">163 USDT 이상</p>
                        </div>
                        <p className="text-gray_900 py-1 px-[10px] bg-[#e9f3ff] md:bg-transparent rounded-lg f-pretendard-b text-[13px] md:text-[19px]">총 <strong className="text-blue_700">0 USDT</strong> 받음</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 xmd:grid-cols-4 gap-1 md:gap-4 px-5 md:px-0 pt-[14px] md:pt-0'>
                        <Link href="/tonsociety">
                            <div className='flex flex-row md:flex-col items-center md:items-start py-[14px] md:py-0'>
                                <div className='rounded-t-lg rounded-b-lg md:rounded-b-none mr-4 md:mr-0 bg-blue_50 h-[66px] md:h-[120px] w-[66px] md:w-full flex justify-center items-center'>
                                    <img src="/assets/tonsociety.svg" alt="tonsociety" />
                                </div>

                                <div className='md:h-[114px] md:rounded-b-[16px] w-full flex-1 md:flex-auto md:border md:pt-3 md:px-4 border-gray_55 flex flex-col justify-between md:p-3'>
                                    <h4 className='text-gray_700 md:text-gray_900 text-[17px] md:text-[15px] leading-[150%] break-keep f-pretendard-b'>TON 코인과 함께하는 특별한 혜택</h4>

                                    <div className='flex md:justify-end'>
                                        <button className='rounded-[6px] md:bg-blue_700 md:py-2 md:px-3 text-center text-base md:text-[13px] text-blue_700 md:text-white f-pretendard-b'>최대 20 USDT 에어드랍</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/welcome">
                            <div className='flex flex-row md:flex-col items-center md:items-start py-[14px] md:py-0'>
                                <div className='rounded-t-lg rounded-b-lg md:rounded-b-none mr-4 md:mr-0 bg-blue_50 h-[66px] md:h-[120px] w-[66px] md:w-full flex justify-center items-center'>
                                    <img src="/assets/welcome.webp" alt="welcome" />
                                </div>

                                <div className='md:h-[114px] md:rounded-b-[16px] w-full flex-1 md:flex-auto md:border md:pt-3 md:px-4 border-gray_55 flex flex-col justify-between md:p-3'>
                                    <h4 className='text-gray_700 md:text-gray_900 text-[17px] md:text-[15px] leading-[150%] break-keep f-pretendard-b'>테더맥스와 처음이니</h4>

                                    <div className='flex md:justify-end'>
                                        <button className='rounded-[6px] md:bg-blue_700 md:py-2 md:px-3 text-center text-base md:text-[13px] text-blue_700 md:text-white f-pretendard-b'>최대 10 USDT 받기</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/notefication">
                            <div className='flex flex-row md:flex-col items-center md:items-start py-[14px] md:py-0'>
                                <div className='rounded-t-lg rounded-b-lg md:rounded-b-none mr-4 md:mr-0 bg-blue_50 h-[66px] md:h-[120px] w-[66px] md:w-full flex justify-center items-center'>
                                    <img src="/assets/notification.webp" alt="notification" />
                                </div>

                                <div className='md:h-[114px] md:rounded-b-[16px] w-full flex-1 md:flex-auto md:border md:pt-3 md:px-4 border-gray_55 flex flex-col justify-between md:p-3'>
                                    <h4 className='text-gray_700 md:text-gray_900 text-[17px] md:text-[15px] leading-[150%] break-keep f-pretendard-b'>알림 켜고</h4>

                                    <div className='flex md:justify-end'>
                                        <button className='rounded-[6px] md:bg-blue_700 md:py-2 md:px-3 text-center text-base md:text-[13px] text-blue_700 md:text-white f-pretendard-b'>3 USDT 받기</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/payback-test">
                            <div className='flex flex-row md:flex-col items-center md:items-start py-[14px] md:py-0'>
                                <div className='rounded-t-lg rounded-b-lg md:rounded-b-none mr-4 md:mr-0 bg-blue_50 h-[66px] md:h-[120px] w-[66px] md:w-full flex justify-center items-center'>
                                    <img src="/assets/calculator.webp" alt="calculator" />
                                </div>

                                <div className='md:h-[114px] md:rounded-b-[16px] w-full flex-1 md:flex-auto md:border md:pt-3 md:px-4 border-gray_55 flex flex-col justify-between md:p-3'>
                                    <h4 className='text-gray_700 md:text-gray_900 text-[17px] md:text-[15px] leading-[150%] break-keep f-pretendard-b'>받을 돈 확인하고</h4>

                                    <div className='flex md:justify-end'>
                                        <button className='rounded-[6px] md:bg-blue_700 md:py-2 md:px-3 text-center text-base md:text-[13px] text-blue_700 md:text-white f-pretendard-b'>5 USDT 받기</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/uid">
                            <div className='flex flex-row md:flex-col items-center md:items-start py-[14px] md:py-0'>
                                <div className='rounded-t-lg rounded-b-lg md:rounded-b-none mr-4 md:mr-0 bg-blue_50 h-[66px] md:h-[120px] w-[66px] md:w-full flex justify-center items-center'>
                                    <img src="/assets/uid.webp" alt="uid" />
                                </div>

                                <div className='md:h-[114px] md:rounded-b-[16px] w-full flex-1 md:flex-auto md:border md:pt-3 md:px-4 border-gray_55 flex flex-col justify-between md:p-3'>
                                    <h4 className='text-gray_700 md:text-gray_900 text-[17px] md:text-[15px] leading-[150%] break-keep f-pretendard-b'>UID 입력하고</h4>

                                    <div className='flex md:justify-end'>
                                        <button className='rounded-[6px] md:bg-blue_700 md:py-2 md:px-3 text-center text-base md:text-[13px] text-blue_700 md:text-white f-pretendard-b'>10 USDT 받기</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/benefit6">
                            <div className='flex flex-row md:flex-col items-center md:items-start py-[14px] md:py-0'>
                                <div className='rounded-t-lg rounded-b-lg md:rounded-b-none mr-4 md:mr-0 bg-blue_50 h-[66px] md:h-[120px] w-[66px] md:w-full flex justify-center items-center'>
                                    <img src="/assets/charge.webp" alt="charge" />
                                </div>

                                <div className='md:h-[114px] md:rounded-b-[16px] w-full flex-1 md:flex-auto md:border md:pt-3 md:px-4 border-gray_55 flex flex-col justify-between md:p-3'>
                                    <h4 className='text-gray_700 md:text-gray_900 text-[17px] md:text-[15px] leading-[150%] break-keep f-pretendard-b'>수수료 돌려받고</h4>

                                    <div className='flex md:justify-end'>
                                        <button className='rounded-[6px] md:bg-blue_700 md:py-2 md:px-3 text-center text-base md:text-[13px] text-blue_700 md:text-white f-pretendard-b'>15 USDT 받기</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/events">
                            <div className='flex flex-row md:flex-col items-center md:items-start py-[14px] md:py-0'>
                                <div className='rounded-t-lg rounded-b-lg md:rounded-b-none mr-4 md:mr-0 bg-blue_50 h-[66px] md:h-[120px] w-[66px] md:w-full flex justify-center items-center'>
                                    <img src="/assets/event.webp" alt="event" />
                                </div>

                                <div className='md:h-[114px] md:rounded-b-[16px] w-full flex-1 md:flex-auto md:border md:pt-3 md:px-4 border-gray_55 flex flex-col justify-between md:p-3'>
                                    <h4 className='text-gray_700 md:text-gray_900 text-[17px] md:text-[15px] leading-[150%] break-keep f-pretendard-b'>이벤트 참여하고</h4>

                                    <div className='flex md:justify-end'>
                                        <button className='rounded-[6px] md:bg-blue_700 md:py-2 md:px-3 text-center text-base md:text-[13px] text-blue_700 md:text-white f-pretendard-b'>추가 수익 받기</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/exchange">
                            <div className='flex flex-row md:flex-col items-center md:items-start py-[14px] md:py-0'>
                                <div className='rounded-t-lg rounded-b-lg md:rounded-b-none mr-4 md:mr-0 bg-blue_50 h-[66px] md:h-[120px] w-[66px] md:w-full flex justify-center items-center'>
                                    <img src="/assets/charge.webp" alt="charge" />
                                </div>

                                <div className='md:h-[114px] md:rounded-b-[16px] w-full flex-1 md:flex-auto md:border md:pt-3 md:px-4 border-gray_55 flex flex-col justify-between md:p-3'>
                                    <h4 className='text-gray_700 md:text-gray_900 text-[17px] md:text-[15px] leading-[150%] break-keep f-pretendard-b'>매달 거래소별로 페이백 받고</h4>

                                    <div className='flex md:justify-end'>
                                        <button className='rounded-[6px] md:bg-blue_700 md:py-2 md:px-3 text-center text-base md:text-[13px] text-blue_700 md:text-white f-pretendard-b'>최대 100 USDT 받기</button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefit