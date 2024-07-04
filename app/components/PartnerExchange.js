"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const partnerExchanges = [
    {
        name: 'Bybit',
        logo: '/assets/bybit.webp',
        popularlogo: '/assets/인기 거래소.webp',
        popular: '인기 거래소',
        cashbackRate: '30%',
        discountRate: '20%',
        averageRefund: '75만원',
        limitOrderFee: '0.014%',
        marketOrderFee: '0.031%',
        link: '/bybit',
    },
    {
        name: 'DeepCoin',
        logo: '/assets/deepcoin.png',
        popularlogo: '/assets/star.webp',
        popular: '신규 제휴',
        cashbackRate: '70%',
        discountRate: '50%',
        averageRefund: '5만원',
        limitOrderFee: '0.006%',
        marketOrderFee: '0.012%',
        link: '/deepcoin',
    },
    {
        name: 'Bitget',
        logo: '/assets/bitget.png',
        popularlogo: '/assets/인기 거래소.webp',
        popular: '인기 거래소',
        cashbackRate: '54%',
        discountRate: '50%',
        averageRefund: '94만원',
        limitOrderFee: '0.009%',
        marketOrderFee: '0.018%',
        link: '/bitget',
    },
    {
        name: 'OKX',
        logo: '/assets/okx.png',
        popularlogo: '/assets/money-dollay.webp',
        popular: '준비금 증명',
        cashbackRate: '54%',
        discountRate: '0%',
        averageRefund: '64만원',
        limitOrderFee: '0.009%',
        marketOrderFee: '0.023%',
        link: '/okx',
    },
    {
        name: 'BingX',
        logo: '/assets/bingx.png',
        popularlogo: '/assets/hand.webp',
        popular: '추천 거래소',
        cashbackRate: '60%',
        discountRate: '0%',
        averageRefund: '13만원',
        limitOrderFee: '0.008%',
        marketOrderFee: '0.020%',
        link: '/bingx',
    },
    {
        name: 'BitMart',
        logo: '/assets/bitmart.png',
        popularlogo: '/assets/인기 거래소.webp',
        popular: '인기 거래소',
        cashbackRate: '65%',
        discountRate: '30%',
        averageRefund: '21만원',
        limitOrderFee: '0.007%',
        marketOrderFee: '0.015%',
        link: '/bitmart',
    },
    {
        name: 'CoinCatch',
        logo: '/assets/coin-catch.png',
        popularlogo: '/assets/인기 거래소.webp',
        popular: '인기 거래소',
        cashbackRate: '60%',
        discountRate: '0%',
        averageRefund: '92만원',
        limitOrderFee: '0.008%',
        marketOrderFee: '0.024%',
        link: '/coincatch',
    },
    {
        name: 'BitMEX',
        logo: '/assets/bitmax.png',
        popularlogo: '/assets/blue-star.webp',
        popular: '단독제휴',
        cashbackRate: '54%',
        discountRate: '0%',
        averageRefund: '5만원',
        limitOrderFee: '-0.015%',
        marketOrderFee: '0.042%',
        link: '/bitmex',
    },
    {
        name: 'BitVenus',
        logo: '/assets/bitvenus.png',
        popularlogo: '/assets/hand.webp',
        popular: '추천 거래소',
        cashbackRate: '60%',
        discountRate: '0%',
        averageRefund: '27만원',
        limitOrderFee: '0.016%',
        marketOrderFee: '0.024%',
        link: '/bitvenus',
    },
    {
        name: 'HTX',
        logo: '/assets/htx.png',
        popularlogo: '/assets/hand.webp',
        popular: '추천 거래소',
        cashbackRate: '54%',
        discountRate: '0%',
        averageRefund: '1만원',
        limitOrderFee: '0.009%',
        marketOrderFee: '0.023%',
        link: '/htx',
    },
];

const PartnerExchange = () => {
    const router = useRouter();

    const handleRowClick = (link) => {
        router.push(link);
    };
    return (
        <div className='flex'>
            <table className='flex-auto border-collapse'>
                <thead>
                    <tr className='border-collapse tablerow'>
                        <th className='text-left border-y border-gray_50 text-gray_900 text-xs f-pretendard-sm py-[14px] px-6'>거래소명</th>
                        <th className='text-left border-y border-gray_50 text-gray_900 text-xs f-pretendard-sm py-[14px] px-6'></th>
                        <th className='text-right border-y border-gray_50 text-gray_900 text-xs f-pretendard-sm py-[14px] px-6'>페이백율(%)</th>
                        <th className='text-right border-y border-gray_50 text-gray_900 text-xs f-pretendard-sm py-[14px] px-6'>거래 할인율(%)</th>
                        <th className='text-right border-y border-gray_50 text-gray_900 text-xs f-pretendard-sm py-[14px] px-6'>1인 평균 환급금</th>
                        <th className='text-right border-y border-gray_50 text-gray_900 text-xs f-pretendard-sm py-[14px] px-6'>지정가</th>
                        <th className='text-right border-y border-gray_50 text-gray_900 text-xs f-pretendard-sm py-[14px] px-6'>시장가(%)</th>
                    </tr>
                </thead>

                <tbody>
                    {partnerExchanges.map((exchange, index) => (
                        <tr key={index} className='cursor-pointer hover:bg-gray_50 tbody' onClick={() => handleRowClick(exchange.link)}>
                            <td className='text-left md:border-y border-gray_50 text-gray_900 f-pretendard-sm py-4 px-5 md:px-6'>
                                <div className='flex items-center gap-4 mr-auto'>
                                    <Image src={exchange.logo} alt={exchange.name} className='rounded-full' width={40} height={40} />
                                    <div className='flex flex-col gap-1'>
                                        <h4 className='text-gray_900 text-[17px] f-pretendard-b'>{exchange.name}</h4>
                                        {exchange.popular && (
                                            <div className='flex items-center gap-[2px] text-gray_400 text-[13px] leading-[16px] f-pretendard-sm'>
                                                {exchange.popular}
                                                <Image src={exchange.popularlogo} alt="Popular icon" width={16} height={16}  />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </td>
                            <td className='text-left border-y border-gray_50 text-gray_900 text-xs f-pretendard-sm py-4 px-6 tablerow'></td>
                            <td className='text-right border-y border-gray_50 text-gray_900 text-sm f-pretendard-b py-4 px-6 tablerow'>
                                <strong className='text-blue_700'>{exchange.cashbackRate}</strong> 페이백
                            </td>
                            <td className='text-right border-y border-gray_50 text-gray_900 text-sm f-pretendard-b py-4 px-6 tablerow'>
                                <strong className='text-blue_700'>{exchange.discountRate}</strong> 할인
                            </td>
                            <td className='text-right border-y border-gray_50 text-gray_900 text-sm f-pretendard-b py-4 px-6 tablerow'>{exchange.averageRefund}</td>
                            <td className='text-right border-y border-gray_50 text-gray_900 text-sm f-pretendard-b py-4 px-6 tablerow'>{exchange.limitOrderFee}</td>
                            <td className='text-right border-y border-gray_50 text-gray_900 text-sm f-pretendard-b py-4 px-6 tablerow'>{exchange.marketOrderFee}</td>
                            <td className='flex md:hidden pr-5 items-center gap-1'>
                                <div className='bg-blue_50 text-gray_500 text-[11px] text-right max-w-full break-words f-pretendard-b py-[5px] px-[6px] rounded-lg'>
                                    <strong className='text-blue_700'>{exchange.cashbackRate}</strong>
                                    페이백 +
                                    <strong className='text-blue_700'>{exchange.discountRate}</strong>
                                    할인
                                </div>
                                <Image src="/assets/right-arrow.svg" alt="right-arrow" width={14} height={14} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PartnerExchange;
