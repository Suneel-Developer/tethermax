'use client'
import React, { useState } from 'react';

const CashbankProcces = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <section className="mt-[120px] px-6">
            <p className="text-white text-[17px] leading-[150%] f-pretendard-m text-center">테더맥스에서 거래소를 이용하는 방법</p>
            <p className="text-white text-[32px] leading-[150%] f-pretendard-b text-center mt-4">테더맥스 이용 방법</p>

            <div className='mt-10 flex flex-col md:flex-row'>
                <div className='max-w-full md:max-w-[521px] w-full flex items-center justify-center relative min-h-[445px] rounded-[32px] h-auto shrink-0 bg-[#1f2024] pt-[34px] pb-8 px-[22px]'>
                    <div className='w-[216px] md:w-[261px]'>
                        {activeTab === 1 && <img src="/assets/howtouse.webp" alt="tab1" className='w-full' />}
                        {activeTab === 2 && <img src="/assets/howtouse2.webp" alt="tab2" className='w-full' />}
                        {activeTab === 3 && <img src="/assets/howtouse3.webp" alt="tab3" className='w-full' />}
                        {activeTab === 4 && <img src="/assets/howtouse4.webp" alt="tab4" className='w-full' />}
                    </div>
                </div>

                <div className='mt-4 md:mt-0 flex-auto grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-4 relative flex-wrap ml-0 md:ml-4'>
                    <button
                        className={`bg-[#1f2024] border text-[15px] hover:text-blue_700 transition-colors duration-100 hover:border-blue_700 f-pretendard-b rounded-[20px] py-[38px] px-5 ${activeTab === 1 ? 'text-blue_700 border-blue_700' : 'border-gray_900 text-gray_300'}`}
                        onClick={() => handleTabClick(1)}
                    >
                        1.테더맥스 코드로 거래소 가입하기
                    </button>
                    <button
                        className={`bg-[#1f2024] border text-[15px] hover:text-blue_700 transition-colors duration-100 hover:border-blue_700 f-pretendard-b rounded-[20px] py-[38px] px-5 ${activeTab === 2 ? 'text-blue_700 border-blue_700' : 'border-gray_900 text-gray_300'}`}
                        onClick={() => handleTabClick(2)}
                    >
                        2.테더맥스에 UID 연결하기
                    </button>
                    <button
                        className={`bg-[#1f2024] border text-[15px] hover:text-blue_700 transition-colors duration-100 hover:border-blue_700 f-pretendard-b rounded-[20px] py-[38px] px-5 ${activeTab === 3 ? 'text-blue_700 border-blue_700' : 'border-gray_900 text-gray_300'}`}
                        onClick={() => handleTabClick(3)}
                    >
                        3.트레이딩 마음껏 즐기기
                    </button>
                    <button
                        className={`bg-[#1f2024] border text-[15px] hover:text-blue_700 transition-colors duration-100 hover:border-blue_700 f-pretendard-b rounded-[20px] py-[38px] px-5 ${activeTab === 4 ? 'text-blue_700 border-blue_700' : 'border-gray_900 text-gray_300'}`}
                        onClick={() => handleTabClick(4)}
                    >
                        4.페이백 환급받기!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CashbankProcces;
