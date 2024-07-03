"use client"
import React, { useState } from 'react';

const StepComponent = ({ onSelectExchange , onNext }) => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (index, name) => {
        setSelected(index);
        onSelectExchange(name);
    };
    const handleNext = () => {
        if (selected !== null) {
            onNext();
        }
    };

    const options = [
        { name: 'Binance', logo: '/assets/binance_logo.png' },
        { name: 'Bybit', logo: '/assets/bybit.png' },
        { name: 'Deepcoin', logo: '/assets/blofin.png' },
        { name: 'Bitget', logo: '/assets/_bitget.png' },
        { name: 'OKX', logo: '/assets/_okx.png' },
        { name: 'BingX', logo: '/assets/_bingx.png' },
        { name: 'Deepcoin', logo: '/assets/_deepcoin.png' },
        { name: 'BitMart', logo: '/assets/_bitmart.png' },
        { name: 'CoinCatch', logo: '/assets/_coincatch.png' },
        { name: 'BitMEX', logo: '//assets/bitmex.png' },
        { name: 'BitVenus', logo: '/assets/_bitvenus.png' },
        { name: 'HTX', logo: '/assets/_htx.png' },
    ];

    return (
        <div className="w-full h-full relative flex flex-col justify-between">
            <div className='flex flex-col gap-6'>
                <div>
                    <h3 className="text-2xl f-pretendard-b mb-1 leading-[150%] text-gray_900">가장 자주 쓰는 <br />사용하시나요?</h3>
                    <p className="text-base f-pretendard-sm mb-5 leading-[150%] text-gray_500">어떤 거래소를 이용하고 계신가요?</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(index, option.name)}
                            className={`border h-12 hover:bg-blue_50 transition-all duration-200 relative px-3 rounded-xl cursor-pointer flex items-center justify-center ${selected === index ? 'border-blue_700 bg-blue_55' : 'border-gray_100 bg-white'}`}
                        >
                            <div className='absolute my-auto left-3'>
                                <img src={selected === index ? "/assets/blue-tikmark.svg" : "/assets/tikmark-box.svg"} alt="" />
                            </div>
                            <img src={option.logo} alt={option.name} className="h-6" />
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={handleNext}
                className={`w-full h-14 text-white absolute mx-auto -bottom-8 md:-bottom-4 rounded-xl text-lg f-pretendard-b ${selected !== null ? 'bg-blue_700' : 'bg-blue_200 cursor-not-allowed'}`}
                disabled={selected === null}
            >
                다음
            </button>
        </div>
    );
};

export default StepComponent;
