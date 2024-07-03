"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ExchangeModal from './exchangeModal';

const SearchSection = () => {
    const router = useRouter();

    const navigateToPayback = () => {
        router.push('/payback');
    };

    const navigateToDownload = () => {
        router.push('/download');
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExchange, setSelectedExchange] = useState({
        name: 'Bybit',
        imgSrc: '/assets/bybit.webp',
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSelectExchange = (exchange) => {
        setSelectedExchange(exchange);
        handleCloseModal();
    };

    const exchanges = [
        { name: 'Bybit', imgSrc: '/assets/bybit (1).webp', quantity: "74" },
        { name: 'Blofin', imgSrc: '/assets/blofin.png', quantity: "1" },
        { name: 'Bitget', imgSrc: '/assets/bitget.png', quantity: "95" },
        { name: 'OKX', imgSrc: '/assets/okx.png', quantity: "64" },
        { name: 'BingX', imgSrc: '/assets/bingx.png', quantity: "13" },
        { name: 'DeepCoin', imgSrc: '/assets/deepcoin.png', quantity: "6" },
        { name: 'BitMart', imgSrc: '/assets/bitmart.png', quantity: "21" },
        { name: 'CoinCatch', imgSrc: '/assets/coin-catch.png', quantity: "91" },
        { name: 'BitMex', imgSrc: '/assets/bitmex.png', quantity: "5" },
        { name: 'BitVenus', imgSrc: '/assets/bitvenus.png', quantity: "27" },
        { name: 'HTX', imgSrc: '/assets/htx.png', quantity: "1" },
    ];

    return (
        <section className='bg-white flex flex-col mt:h-[64px]'>
            <div className='pt-7 md:pt-[39px] pb-4 md:pb-8 px-6'>
                <div className='text-gray_900 text-[21px] md:text-[26px] f-pretendard-b text-center mb-2'>
                    클릭 한 번으로
                    <strong className='text-blue_700'> 페이백 </strong>
                    받으세요!
                </div>

                <div className='text-gray_400 text-[15px] md:text-[17px] f-pretendard-sm text-center'>
                    선물거래 수수료 페이백 플랫폼,
                    <strong className='text-blue_700'> 테더맥스 </strong>
                </div>
            </div>

            <div className='px-5 md:px-6'>
                <div className='py-[11px] md:py-[14px] pl-[18px] md:pl-[28px] pr-3 md:pr-[21px] rounded-[37.5px] border border-blue_700 bg-white flex items-center f-pretendard-b gap-1 md:gap-2' style={{ boxShadow: "0 4px 6px 0 rgba(67,142,185,.1)" }}>
                    <div onClick={handleOpenModal} className='flex items-center gap-1 md:gap-2 cursor-pointer'>
                        <div className='flex items-center gap-4'>
                            <img src={selectedExchange.imgSrc} alt={selectedExchange.name} className='w-8 h-8 rounded-full' />
                            <span className='text-gray_700 text-xl f-pretendard-b hidden md:block'>{selectedExchange.name}</span>
                        </div>
                        <img src="/assets/down-arrow.png" alt="down-arrow" />
                    </div>

                    {isModalOpen && <ExchangeModal onClose={handleCloseModal} onSelectExchange={handleSelectExchange} />}

                    <form className='flex items-center flex-auto'>
                        <input placeholder='거래소 UID를 입력해주세요' className='border-none outline-none bg-transparent h-[30px] text-gray_900 w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl f-pretendard-b' />
                        <button className='flex items-center' type='button'>
                            <img src="/assets/search-icon.png" alt="search-icon" className='w-8 h-8' />
                        </button>
                    </form>
                </div>
            </div>

            <p className='mt-5 mb-3 md:mb-4 px-5 md:px-6 text-gray_400 f-pretendard-sm'>1인 평균 환급액</p>

            <div className='mt-[18px] flex overflow-x-auto gap-3 px-6 no-scrollbar'>
                {exchanges.map((exchange, index) => (
                    <button onClick={() => handleSelectExchange(exchange)} key={index} className='w-fit whitespace-nowrap py-2 md:py-3 px-3 md:px-4 bg-gray_55 text-gray_700 rounded-xl text-[15px] f-pretendard-m flex justify-center items-center gap-1'>
                        <span>{exchange.name}</span>
                        <span className='text-[#de4743]'>{exchange.quantity}만원</span>
                    </button>
                ))}
            </div>

            <div className='mt-8 mx-5 md:mx-6 p-8 md:p-9 rounded-2xl bg-blue_50 flex flex-col items-center'>
                <img src="/assets/calculatorHome.webp" alt="calculator" className='w-[72px] h-[72px]' />
                <div className='text-lg md:text-xl text-center text-gray_900 mt-3 f-pretendard-b leading-[150%]'>
                    1인 월평균 페이백
                    <strong className='text-blue_700'> 497,500원</strong> <br />
                    1분 만에 확인해 보세요!
                </div>
                <button onClick={navigateToPayback} type='button' className='bg-blue_700 hover:bg-blue_900 mt-5 h-11 py-3 px-4 rounded-xl f-pretendard-b text-center text-lg text-white hidden md:flex items-center justify-center' style={{ boxShadow: "0 0 12px 0 rgba(67,142,185,.1)" }}>내가 받을 돈 확인하기</button>
            </div>
            <button onClick={navigateToPayback} type='button' className='bg-blue_700 hover:bg-blue_900 mt-5 h-14 mx-5 py-3 px-4 rounded-xl f-pretendard-b text-center text-lg text-white flex md:hidden items-center justify-center' style={{ boxShadow: "0 0 12px 0 rgba(67,142,185,.1)" }}>내가 받을 돈 확인하기</button>

            <div onClick={navigateToDownload} className='mt-[26px] md:mt-4 mb-0 md:mb-4 mx-5 md:mx-6 py-[18px] px-5 rounded-[20px] bg-white border border-gray_50 flex items-center gap-6 cursor-pointer' style={{ boxShadow: "4px 4px 16px 0 rgba(58,66,85,.08)" }}>
                <img src="/assets/logo.gif" alt="tethermax logo" className='w-10' />

                <div className='flex flex-col gap-1'>
                    <span className='text-sm md:text-[13px] text-gray_400 f-pretendard-sm'>더 간단하고 더 빨라졌어요</span>
                    <h3 className='text-[17px] text-blue_700 f-pretendard-b'>테더맥스 어플 자세히 보기</h3>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;
