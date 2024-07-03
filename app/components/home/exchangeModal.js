import React, { useRef, useEffect } from 'react';

const ExchangeModal = ({ onClose, onSelectExchange }) => {
    const exchanges = [
        { name: 'Bybit', imgSrc: '/assets/bybit (1).webp' },
        { name: 'Blofin', imgSrc: '/assets/blofin.png' },
        { name: 'Bitget', imgSrc: '/assets/bitget.png' },
        { name: 'OKX', imgSrc: '/assets/okx.png' },
        { name: 'BingX', imgSrc: '/assets/bingx.png' },
        { name: 'DeepCoin', imgSrc: '/assets/deepcoin.png' },
        { name: 'BitMart', imgSrc: '/assets/bitmart.png' },
        { name: 'CoinCatch', imgSrc: '/assets/coin-catch.png' },
        { name: 'BitMex', imgSrc: '/assets/bitmex.png' },
        { name: 'BitVenus', imgSrc: '/assets/bitvenus.png' },
        { name: 'HTX', imgSrc: '/assets/htx.png' },
    ];

    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-40 top-0 bottom-0 h-screen">
            <div ref={modalRef} className="bg-white rounded-[20px] w-full max-w-[500px]">
                <div className='flex items-center justify-center h-9'>
                    <div className='w-9 h-[2px] mt-[10px] rounded-[1.5px] bg-gray_100'></div>
                </div>

                <div className='px-5'>
                    <div className='flex flex-col gap-3 pb-5'>
                        <div className='text-gray_900 text-xl f-pretendard-b'>거래소 선택</div>
                        <div className='min-h-[600px] h-[600px] overflow-y-auto'>
                            {exchanges.map((exchange, index) => (
                                <button
                                    key={index}
                                    onClick={() => onSelectExchange(exchange)}
                                    className='py-3 flex items-center w-full gap-4 text-gray_700 text-[17px] f-pretendard-m'
                                >
                                    <img src={exchange.imgSrc} alt={exchange.name} className='w-8 h-8 rounded-full' />
                                    <span>{exchange.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExchangeModal;
