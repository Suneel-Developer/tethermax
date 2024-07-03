"use client"
import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [progress, setProgress] = useState(0);
    const [tooltipVisible, setTooltipVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setProgress(45);
        }, 100);
    }, []);


    const handleTooltipToggle = () => {
        setTooltipVisible(!tooltipVisible);
    };

    return (
        <section>
            <div className='bg-[#121212] min-h-[200px] flex flex-col justify-center items-center w-full'>
                <img src="/assets/bitvenus-thumbnail.webp" alt="BitVenus" className='w-[200px] h-[200px]' />
            </div>

            <div className='pt-6 pb-12 px-6 bg-white'>
                <p className='text-gray_900 text-[26px] f-pretendard-b'>BitVenus</p>
                <p className='text-gray_500 text-[17px] f-pretendard-sm mt-3'>수수료 페이백 <strong className='text-blue_700'>70%</strong></p>


                {/* progress Bar  */}
                <div className='relative mt-[53px]'>
                    <div className=" w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="absolute h-2 bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                        <div
                            className="absolute top-[-40px] transition duration-300 z-20 transform translate-x-[-50%] bg-gray_55 text-gray_500 text-[13px] px-2 py-[6px] rounded-xl min-w-[82px] f-pretendard-sm"
                            style={{ left: `calc(${progress}% - 30px)` }}
                        >
                            마감률 {progress}%
                            <div className="tooltip-arrow"></div>
                        </div>
                    </div>
                </div>


                {/* tooltip  */}
                <div className='mt-8 flex-col flex gap-4'>
                    <div className='relative'>
                        <button onClick={handleTooltipToggle} className='flex gap-1 items-center text-gray_900 text-2xl relative f-pretendard-b'>
                            수수료율
                            <img src="/assets/questionmark.svg" alt="questionmark icon" />

                            {/* tooltip  */}
                            {tooltipVisible && (
                                <div className='absolute bg-gray_55 rounded-xl -top-[30px] left-[15px] m-auto h-[27px] px-2 whitespace-pre text-gray_500 text-center text-[13px] f-pretendard-sm tooltiparrowafter'>페이백을 고려한 수수료율이에요</div>
                            )}
                        </button>
                    </div>

                    <div className='flex items-center'>
                        <p className='mr-[54px] text-gray_500 text-[17px] f-pretendard-b'>지정가</p>
                        <p className='mr-2 text-gray_300 text-lg f-pretendard-m line-through'>0.04%</p>
                        <p className='mr-2 text-blue_700 text-[22px] f-pretendard-b'>0.006%</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='mr-[54px] text-gray_500 text-[17px] f-pretendard-b'>지정가</p>
                        <p className='mr-2 text-gray_300 text-lg f-pretendard-m line-through'>0.06%</p>
                        <p className='mr-2 text-blue_700 text-[22px] f-pretendard-b'>0.012%</p>
                    </div>

                </div>


            </div>

        </section>
    );
}

export default Hero;
