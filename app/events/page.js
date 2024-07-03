"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Topbar from '../components/Topbar';

const tabsData = [
    { id: 'all', label: '전체' },
    { id: 'bybit', label: 'Bybit' },
    { id: 'deepcoin', label: 'DeepCoin' },
    { id: 'bitget', label: 'Bitget' },
    { id: 'okx', label: 'OKX' },
    { id: 'bingx', label: 'BingX' },
    { id: 'bitmart', label: 'BitMart' },
    { id: 'coincatch', label: 'CoinCatch' },
    { id: 'bitvenus', label: 'BitVenus' },
];

const eventsData = [
    {
        id: 'bybit',
        image: '/assets/event1.webp',
        alt: 'event1',
        title: '바이비트 7월 대회',
        description: '60,000 USDT 상금 + 페이백',
        date: '24.06.27 ~ 24.07.11',
    },
    {
        id: 'bitget',
        image: '/assets/_bitget-competition.webp',
        alt: 'event1',
        title: '비트겟 7월 대회',
        description: '30,000 USDT 상금 + 페이백',
        date: '24.06.27 ~ 24.07.11',
    },
    {
        id: 'okx',
        image: '/assets/_okx-compitition.webp',
        alt: 'event1',
        title: '7월 OKX 대회',
        description: '상금 30,000 USDT + 신규가입 30 USDT',
        date: '24.07.01 ~ 24.08.01',
    },
    {
        id: 'bitmart',
        image: '/assets/_bitmart-event.webp',
        alt: 'event1',
        title: '비트마트 신규 / 트레이딩 이벤트',
        description: 'Join Now 클릭해서 참여하고 최대 14,600USDT',
        date: '24.06.22~ 24.07.22',
    },
    {
        id: 'coincatch',
        image: '/assets/event02.webp',
        alt: 'event1',
        title: '7월 CoinCatch 이벤트',
        description: '입금 / 거래하고 최대 50,000 + 30 USDT',
        date: '24.07.10~ 24.07.31',
    },
    {
        id: 'coincatch',
        image: '/assets/coincatch_competition.webp',
        alt: 'event1',
        title: '코인캐치 7월 대회',
        description: '상금 50,000 USDT + 페이백',
        date: '24.07.01~ 24.07.21',
    },
    {
        id: 'bitvenus',
        image: '/assets/bitvennus-cometition.webp',
        alt: 'event1',
        title: '비트비너스 7월 대회',
        description: '상금 30,000 USDT + 페이백',
        date: '24.07.01~ 24.07.31',
    },
    {
        id: 'bitvenus',
        image: '/assets/_bitvenus.webp',
        alt: '_bitvenus',
        title: 'Bitvenus 가입 이벤트',
        description: '가입하고 4,100 USDT 받자!',
        date: '24.07.01~ 24.07.31',
    },
    {
        id: 'bingx',
        image: '/assets/_bingx.webp',
        alt: 'bingx',
        title: '빙엑스 7월 대회',
        description: '상금풀 최대 60,000 USDT + 페이백',
        date: '24.07.01~ 24.07.31',
    },
    {
        id: 'deepcoin',
        image: '/assets/_deepcoin.webp',
        alt: '_deepcoin',
        title: '딥코인 신규회원 이벤트',
        description: '입금하고 최대 1,000 USDT 받아가세요!',
        date: '24.06.01~ 24.07.31',
    },
    {
        id: 'bitget',
        image: '/assets/_bitget-event.webp',
        alt: 'bitget',
        title: '6월 Bitget 신규 가입 이벤트',
        description: '상금 2,200$ BTC + 신규가입 120 USDT',
        date: '24.07.01~ 24.07.31',
    },
];

const Events = () => {
    const [activeTab, setActiveTab] = useState('all');

    const filteredEvents = activeTab === 'all' ? eventsData : eventsData.filter(event => event.id === activeTab);

    return (
        <>
            <section>
                <div className='hidden md:block'><Header /></div>
                <div className='block md:hidden'><Topbar /></div>
            </section>

            <section className="bg-gray_50">
                <div className="max-w-[840px] w-full mx-auto bg-white pt-14">
                    <h2 className="text-gray_900 text-[28px] break-keep leading-[38px] px-6 f-pretendard-b text-center">테더맥스에서만 볼 수 있는 거래소 이벤트에요</h2>
                    <h4 className="text-gray_400 text-[17px] break-keep leading-[26px] px-5 f-pretendard-sm mt-2 mb-5 text-center">트레이더님들을 위해 준비했어요</h4>

                    <div className="border-b border-gray_55 pr-6 flex pl-[30px] items-center justify-between overflow-x-auto no-scrollbar">
                        {tabsData.map(tab => (
                            <div key={tab.id} className="mr-3 w-fit">
                                <button
                                    className={`py-3 px-[6px] text-[17px] f-pretendard-b ${activeTab === tab.id ? 'text-gray_900 border-b-2 border-gray_900' : 'text-gray_400'}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="px-4 md:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
                        {filteredEvents.map((event, index) => (
                            <div key={index} className='cursor-pointer'>
                                <img src={event.image} alt={event.alt} className="rounded-2xl h-[155px] md:h-[186px] w-full" />
                                <div className="mt-1 flex flex-col gap-1 w-full">
                                    <p className="text-gray_500 text-[13px] leading-[20px] f-pretendard-m">{event.title}</p>
                                    <p className="text-gray_900 text-[17px] leading-[26px] f-pretendard-b">{event.description}</p>
                                    <div className="flex items-center gap-2">
                                        <img src="/assets/calender.svg" alt="timer" className="w-5 h-5" />
                                        <span className="text-gray_700 text-[13px] f-pretendard-m">{event.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='py-6 px-5 flex flex-col'>
                    <div className='max-w-[840px] mx-auto w-full px-6 bg-gray_55'>
                        <h2 className='text-gray_700 text-[15px] f-pretendard-b'>유의사항</h2>

                        <ul className="pl-4 mt-5 list-disc text-gray_500 text-[15px] f-pretendard-m">
                            <li>거래소별로 이벤트 유의사항이 상이할 수 있으니 거래소의 이벤트 상세 내용을 확인해주세요</li>
                            <li>반드시 해당 페이지에서 테더맥스 연동 계정을 통해 참여해주세요. 다른 경로로 참가 시 혜택에 불이익이 있을 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Events;
