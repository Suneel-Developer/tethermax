'use client'
import Link from 'next/link';
import React, { useState } from 'react';


const TradingFees = () => {
    const [activeTab, setActiveTab] = useState(4);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    return (
        <>
            <section className="mt-[120px] px-6">
                <p className="mb-4 break-keep px-6 text-white text-[32px] f-pretendard-b leading-[150%] text-center">한달 평균 페이백, <br />50 USDT부터 3,500 USDT 까지</p>
                <p className="mb-6 text-white text-[17px] f-pretendard-m leading-[170%] text-center">한달 거래 5회 이상, 시드 100 USDT 이상이라면 <strong className="text-blue_700">50 USDT 이상</strong>, <br />페이백 거래량 상위 5%라면, <strong className="text-blue_700">3,500 USDT 이상</strong>의 페이백을 받고 있어요</p>

                <img src="/assets/canvas.png" alt="canvas" />

                <div className='mt-8 p-5 bg-[#1f2024] rounded-2xl'>
                    <p className="text-[15px] leading-[150%] text-gray_300 break-keep f-pretendard-m">전체 고객에 대한 통계 그래프는 위와 같으며, 100 USDT 미만의 소액시드나 휴면유저의 데이터까지 합산된 통계에요.</p>
                    <p className="text-[15px] leading-[150%] text-gray_300 break-keep f-pretendard-m">일반적으로 선물 거래 매매를 진행하시는 고객님들의 경우, <strong className="text-blue_700"><strong>상위 50%의 초과한 영역에 해당돼요.</strong></strong></p>
                </div>
            </section>

            <section className="mt-[120px] px-6">
                <p className="text-white text-[17px] f-pretendard-m leading-[150%] text-center">테더맥스에서 거래소를 이용하는 방법</p>
                <p className="text-white text-[32px] mt-4 f-pretendard-b leading-[150%] text-center">테더맥스를 통해 <br />거래수수료를 돌려받아요</p>

                <div>
                    <div className='rounded-[32px] bg-[#1f2024] mt-10 pt-10 pb-7'>
                        <p className="text-white text-2xl mb-4 f-pretendard-b leading-[150%] text-center">

                            {activeTab === 1 && <span>BingX</span>}
                            {activeTab === 2 && <span>Bitmex </span>}
                            {activeTab === 3 && <span>Bybit </span>}
                            {activeTab === 4 && <span>Bitget </span>}
                            {activeTab === 5 && <span>OKX </span>}
                            {activeTab === 6 && <span>HTX </span>}

                            유저시군요! <br />
                            테더맥스를 사용할때, <br />
                            <strong className="text-blue_700">
                                {activeTab === 1 && <span>37</span>}
                                {activeTab === 2 && <span>52</span>}
                                {activeTab === 3 && <span>22</span>}
                                {activeTab === 4 && <span>30</span>}
                                {activeTab === 5 && <span>42</span>}
                                {activeTab === 6 && <span>66</span>}
                                만원
                            </strong>
                            더 아낄 수 있어요
                        </p>
                        <p className="text-gray_400 text-[13px] f-pretendard-m leading-[150%] text-center">*시드 500만원, 한 달 평균 수수료 계산 기준</p>

                        <div className='max-w-[200px] flex justify-between items-end w-full mx-auto mt-[66px]'>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <div className='w-12 bg-blue_700 rounded-lg h-36'></div>
                                <span className="text-[15px] text-white f-pretendard-m">테더맥스</span>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2'>
                                {activeTab === 1 && <div className='w-12 bg-gray_55 rounded-lg h-24'></div>}
                                {activeTab === 2 && <div className='w-12 bg-gray_55 rounded-lg h-16'></div>}
                                {activeTab === 3 && <div className='w-12 bg-gray_55 rounded-lg h-[95px]'></div>}
                                {activeTab === 4 && <div className='w-12 bg-gray_55 rounded-lg h-[90px]'></div>}
                                {activeTab === 5 && <div className='w-12 bg-gray_55 rounded-lg h-[80px]'></div>}
                                {activeTab === 6 && <div className='w-12 bg-gray_55 rounded-lg h-[70px]'></div>}
                                <span className="text-[15px] text-gray_400 f-pretendard-m">테더맥스</span>
                            </div>
                        </div>
                    </div>

                    <div className='px-6 mt-8 flex'>
                        <div className='w-[744px] flex gap-4 items-center justify-between overflow-x-auto no-scrollbar'>
                            <button onClick={() => handleTabClick(1)} className={`min-w-[64px] md:min-w-[104px] w-[64px] md:w-[104px] h-[64px] md:h-[104px] rounded-full flex justify-center items-center border-2 hover:border-blue_700 transition-colors tabsbg  ${activeTab === 1 ? 'border-blue_700' : 'border-gray_900'}`}>
                                <img src="/assets/bingx.png" alt="" className={`w-[54px] md:w-[88px] h-[54px] md:h-[88px] hover:opacity-100 rounded-full ${activeTab === 1 ? "opacity-100" : "opacity-30"}`} />
                            </button>

                            <button onClick={() => handleTabClick(2)} className={`min-w-[64px] md:min-w-[104px] w-[64px] md:w-[104px] h-[64px] md:h-[104px] rounded-full flex justify-center items-center border-2 hover:border-blue_700 transition-colors tabsbg  ${activeTab === 2 ? 'border-blue_700' : 'border-gray_900'}`}>
                                <img src="/assets/bitmax.png" alt="" className={`w-[54px] md:w-[88px] h-[54px] md:h-[88px] hover:opacity-100 rounded-full ${activeTab === 2 ? "opacity-100" : "opacity-30"}`} />
                            </button>

                            <button onClick={() => handleTabClick(3)} className={`min-w-[64px] md:min-w-[104px] w-[64px] md:w-[104px] h-[64px] md:h-[104px] rounded-full flex justify-center items-center border-2 hover:border-blue_700 transition-colors tabsbg  ${activeTab === 3 ? 'border-blue_700' : 'border-gray_900'}`}>
                                <img src="/assets/bybit-thumbnail.webp" alt="" className={`w-[54px] md:w-[88px] h-[54px] md:h-[88px] hover:opacity-100 rounded-full ${activeTab === 3 ? "opacity-100" : "opacity-30"}`} />
                            </button>

                            <button onClick={() => handleTabClick(4)} className={`min-w-[64px] md:min-w-[104px] w-[64px] md:w-[104px] h-[64px] md:h-[104px] rounded-full flex justify-center items-center border-2 hover:border-blue_700 transition-colors tabsbg  ${activeTab === 4 ? 'border-blue_700' : 'border-gray_900'}`}>
                                <img src="/assets/bitget.png" alt="" className={`w-[54px] md:w-[88px] h-[54px] md:h-[88px] hover:opacity-100 rounded-full ${activeTab === 4 ? "opacity-100" : "opacity-30"}`} />
                            </button>
                            <button onClick={() => handleTabClick(5)} className={`min-w-[64px] md:min-w-[104px] w-[64px] md:w-[104px] h-[64px] md:h-[104px] rounded-full flex justify-center items-center border-2 hover:border-blue_700 transition-colors tabsbg  ${activeTab === 5 ? 'border-blue_700' : 'border-gray_900'}`}>
                                <img src="/assets/okx.png" alt="" className={`w-[54px] md:w-[88px] h-[54px] md:h-[88px] hover:opacity-100 rounded-full ${activeTab === 5 ? "opacity-100" : "opacity-30"}`} />
                            </button>

                            <button onClick={() => handleTabClick(6)} className={`min-w-[64px] md:min-w-[104px] w-[64px] md:w-[104px] h-[64px] md:h-[104px] rounded-full flex justify-center items-center border-2 hover:border-blue_700 transition-colors tabsbg  ${activeTab === 6 ? 'border-blue_700' : 'border-gray_900'}`}>
                                <img src="/assets/htx.png" alt="" className={`w-[54px] md:w-[88px] h-[54px] md:h-[88px] hover:opacity-100 rounded-full ${activeTab === 6 ? "opacity-100" : "opacity-30"}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 mt-[120px]">
                <p className="mt-4 text-center text-[32px] leading-[140%] f-pretendard-b text-white">서비스를 이용하려면 <br />어떻게 해야할까요?</p>
                <Link href="/affiliated" > <button className='bg-blue_700 hover:bg-blue_900 transition-colors duration-200 h-12 mt-10 mb-24 text-white text-lg text-center f-pretendard-b rounded-xl px-3 w-full'>제휴 거래소 둘러보기</button></Link>
            </section>
        </>
    )
}

export default TradingFees