import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const exchanges = [
  { name: 'Bybit', link: '/bybit' },
  { name: 'DeepCoin', link: '/deepcoin' },
  { name: 'Bitget', link: '/bitget' },
  { name: 'OKX', link: '/okx' },
  { name: 'BingX', link: '/bingx' },
  { name: 'BitMart', link: '/bitmart' },
  { name: 'CoinCatch', link: '/coincatch' },
  { name: 'BitMEX', link: '/bitmex' },
  { name: 'BitVenus', link: '/bitvenus' },
  { name: 'HTX', link: '/htx' }
];


const EventStep = () => {
  // Initial time in seconds (for example, 36 hours, 31 minutes, 23 seconds)
  const initialTime = 36 * 3600 + 31 * 60 + 23;

  // Timer state
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <section className='pt-7 md:pt-8 bg-white'>
      <div className='mx-5 f-pretendard-b text-gray_900 text-[22px] leading-[32px]'>현재 진행중인 DeepCoin  이벤트에요</div>
      <p className='text-gray_400 text-[15px] f-pretendard-sm mx-5 mt-2'>테더맥스 트레이더님만 참여 가능한 이벤트에요!</p>

      <div className='mt-8 flex gap-4 px-5 overflow-x-auto no-scrollbar pb-14'>
        <div className='w-[155px] min-w-[155px] max-w-[155px]'>
          <Image src="/assets/_deepcoin.webp" alt="_bybit" className='rounded-2xl' width={155} height={155} loading='lazy' />
          <div className='mt-1 flex flex-col gap-1'>
            <p className='text-gray_500 text-[13px] leading-[20px] f-pretendard-m'>딥코인 신규회원 이벤트</p>
            <p className='text-gray_900 text-[17px] leading-[26px] f-pretendard-b'>입금하고 최대 1,000 USDT 받아가세요!</p>
            <div className='flex items-center gap-2'>
              <Image src="/assets/timer.svg" alt="timer" width={20} height={20} />
              <span className='text-gray_700 text-[13px] f-pretendard-m'>{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

      </div>

      <div className='text-gray_900 text-[22px] f-pretendard-b px-5 leading-[32px]'>DeepCoin와 함께한 이벤트들</div>

      <div className='mt-8 flex gap-4 px-5 overflow-x-auto no-scrollbar pb-14'>

        <div className='w-[155px] min-w-[155px] max-w-[155px]'>
          <Image src="/assets/_deepcoin.webp" alt="_deepcoin" className='rounded-2xl' width={155} height={155} loading='lazy' />
          <div className='mt-1 flex flex-col gap-1'>
            <p className='text-gray_500 text-[13px] leading-[20px] f-pretendard-m'>딥코인 신규회원 이벤트</p>
            <p className='text-gray_900 text-[17px] leading-[26px] f-pretendard-b'>입금하고 최대 1,000 USDT 받아가세요!</p>
            <div className='flex items-center gap-2'>
              <Image src="/assets/calender.svg" alt="timer" width={20} height={20} />
              <span className='text-gray_700 text-[13px] f-pretendard-m'>24.05.01 ~ 24.05.31</span>
            </div>
          </div>
        </div>

        <div className='w-[155px] min-w-[155px] max-w-[155px]'>
          <Image src="/assets/_deepcoin.webp" alt="_deepcoin" className='rounded-2xl' width={155} height={155} loading='lazy' />
          <div className='mt-1 flex flex-col gap-1'>
            <p className='text-gray_500 text-[13px] leading-[20px] f-pretendard-m'>딥코인 신규회원 이벤트</p>
            <p className='text-gray_900 text-[17px] leading-[26px] f-pretendard-b'>입금하고 최대 1,000 USDT 받아가세요!</p>
            <div className='flex items-center gap-2'>
              <Image src="/assets/calender.svg" alt="timer" width={20} height={20} />
              <span className='text-gray_700 text-[13px] f-pretendard-m'>24.04.15 ~ 24.05.15</span>
            </div>
          </div>
        </div>

      </div>

      <div className='pb-6'>
        <p className='text-gray_900 text-[22px] f-pretendard-b px-5 leading-[32px]'>테더맥스 고객이 좋아하는 거래소</p>

        <div className='mt-[18px] flex overflow-x-auto gap-3 no-scrollbar px-5'>
          {exchanges.map((exchange) => (
            <Link key={exchange.name} href={exchange.link} passHref>
              <span className='w-fit whitespace-nowrap py-2 md:py-3 px-4 bg-gray_55 text-gray_900 rounded-xl text-[17px] f-pretendard-m flex justify-center items-center gap-1'>
                {exchange.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className='h-4 bg-gray_55 w-full'></div>

      <div className='p-6 bg-white flex items-center justify-between cursor-pointer'>
        <div className='flex items-center gap-4'>
          <Image src="/assets/caller.svg" alt="caller" width={40} height={40} />
          <div>
            <p className='text-gray_400 text-sm f-pretendard-sm'>궁금한 것이 있나요?</p>
            <p className='text-gray_700 text-[17px] f-pretendard-b'>24시간 상담원에게 질문하기</p>
          </div>
        </div>

        <Image src="/assets/right-arrow.svg" alt="right-arrow" width={16} height={16} />
      </div>

      <div className='bg-gray_55 pt-8 pb-[150px] px-5'>
        <p className='text-gray_700 text-[15px] f-pretendard-b'>유의사항</p>
        <p className="text-gray_300 text-[13px] mt-3 f-pretendard-sm" style={{ lineHeight: "150%" }}>DeepCoin과 테더맥스는 공식 제휴 관계입니다.<br />
          카피트레이딩 또는 API를 통해 거래하는 경우에도 동일한 페이백율이 적용됩니다.<br />
          Deepcoin의 페이백은 매일 11시(UTC) 에 트레이더님의 테더맥스 계정으로 지급됩니다.<br />
          나의 페이백 랭킹 이벤트는 Deepcoin의 경우 24년 07월 01일부터 최초 진행됩니다.<br />
          누적된 페이백의 보장 기간은 안전한 정보보호를 위해 최대 탈퇴할 때까지 보관됩니다.<br />
          거래소에서 지급하는 증정금 및 보너스는 유효한 리워드으로 잡히지 않으며, 증정금 및 보너스를 사용하기 전까지는 페이백이 이뤄지지 않습니다. <br />
          거래소별로 마감 인원이 정해져 있어 마감 이후에는 해당 거래소의 페이백 서비스 이용이 어려울 수 있습니다. <br />
          당사 혹은 거래소의 사정으로 페이백 조건은 변경될 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default EventStep;
