"use client"
import React, { useState } from 'react'

const PolicyStep = () => {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const handleTooltipToggle = () => {
        setTooltipVisible(!tooltipVisible);
    };
    return (
        <section>
            <div className='flex flex-col gap-7'>
                <div className='mx-5 f-pretendard-b text-gray_900 text-[22px] leading-[32px]'>OKX 페이백 정책</div>

                <div className='px-6 flex gap-4 items-center w-full'>
                    <img src="/assets/money-bag.svg" alt="money-bag" className='w-10 h-10' />

                    <div>
                        <button onClick={handleTooltipToggle} className='flex gap-1 items-center text-gray_400 text-[15px] relative f-pretendard-sm'>
                            수수료 혜택
                            <img src="/assets/questionmark.svg" alt="questionmark icon" className='w-5 h-5' />

                            {/* tooltip  */}
                            {tooltipVisible && (
                                <div className='absolute bg-gray_55 rounded-xl -top-[35px] left-[4px] m-auto h-[27px] px-2 whitespace-pre flex items-center justify-center text-gray_500 text-center text-[13px] f-pretendard-sm tooltiparrowafter'>대상 : 선물거래 / USDT 거래쌍</div>
                            )}
                        </button>

                        <div className='text-gray_900 text-[17px] f-pretendard-b'>
                            수수료  <strong className='text-blue_700' style={{ lineHeight: "150%" }}>70%</strong> + <strong className='text-blue_700'>50%</strong> (페이백 & 할인)
                        </div>
                    </div>
                </div>

                <div className='px-6 flex gap-4 items-center w-full'>
                    <img src="/assets/StarMedal.svg" alt="StarMedal" className='w-10 h-10' />

                    <div>
                        <button className='flex gap-1 items-center cursor-none text-gray_400 text-[15px] relative f-pretendard-sm'>
                            페이백 혜택
                        </button>

                        <div className='text-gray_900 text-[17px] f-pretendard-b' style={{ lineHeight: "150%" }}>
                            <strong className='text-blue_700'>VIP7</strong> 수수료와 유사한 혜택
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-1 mt-[54px] gap-0 justify-between text-gray_500 text-center text-[17px] f-pretendard-sm min-h-[42px] flex-col'>
                <div className='flex flex-1 items-center justify-between text-gray_500 text-center text-[17px] f-pretendard-sm min-h-[40px] pr-0 md:pr-6 pl-4 md:pl-6 bg-gray_50'>
                    <p className='flex flex-1 py-3 relative text-center text-[13px] f-pretendard-m break-keep'></p>
                    <p className='flex flex-1 py-3 text-gray_500 relative text-center items-center justify-center text-[13px] f-pretendard-m break-keep'>DeepCoin VIP7</p>
                    <div className='flex flex-1 justify-center items-center py-3 relative text-center text-[17px] text-blue_700 f-pretendard-b break-keep mr-2 md:mr-[156px] border-t-[3px] border-blue_700 rounded-t-[20px] border-x-[3px]'>
                        테더맥스 페이백

                        <img src="/assets/circletikmark.png" alt="circletikmark" className=' absolute left-[45%] -top-[38px] w-8 h-8' />
                    </div>
                </div>

                <div className='flex flex-1 text-gray_500 text-center pr-0 md:pr-6 pl-4 md:pl-6'>
                    <p className='flex flex-1 py-3 relative text-left text-[13px] f-pretendard-m break-keep'>30일 <br /> 거래량 조건</p>
                    <p className='flex flex-1 py-3 text-gray_500 relative text-center items-center justify-center text-[13px] f-pretendard-m break-keep'>$200,000,000</p>
                    <p className='flex flex-1 py-3 justify-center items-center relative text-center text-[17px] text-blue_700 f-pretendard-b break-keep mr-2 md:mr-[156px] border-blue_700 border-x-[3px]'>
                        조건없음
                    </p>
                </div>

                <div className='flex flex-1 text-center pr-0 md:pr-6 pl-4 md:pl-6'>
                    <p className='flex flex-1 py-3 relative text-left text-[13px] f-pretendard-m break-keep'>전일 <br />  거래량 조건</p>
                    <p className='flex flex-1 py-3 text-gray_500 relative text-center items-center justify-center text-[13px] f-pretendard-m break-keep'>$0</p>
                    <p className='flex flex-1 py-3 justify-center items-center relative text-center text-[17px] text-blue_700 f-pretendard-b break-keep mr-2 md:mr-[156px] border-blue_700 border-x-[3px]'>
                        조건없음
                    </p>
                </div>

                <div className='flex flex-1 items-center justify-between text-gray_500 text-center text-[17px] f-pretendard-sm min-h-[40px] pr-0 md:pr-6 pl-4 md:pl-6'>
                    <p className='flex flex-1 py-3 relative text-left text-[13px] f-pretendard-m break-keep'>수수료</p>
                    <p className='flex flex-1 py-3 text-gray_500 relative text-center items-center justify-center text-[13px] f-pretendard-m break-keep'>0.012</p>
                    <p className='flex flex-1 py-3 justify-center items-center relative text-center text-[17px] text-blue_700 f-pretendard-b break-keep mr-2 md:mr-[156px] border-b-[3px] border-blue_700 rounded-b-[20px] border-x-[3px]'>
                        0.012%
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PolicyStep