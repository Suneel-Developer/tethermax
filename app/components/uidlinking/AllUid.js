"use client";
import React, { useState } from 'react';
import Popup from './Popup';
import NestedUid from './NestedUid';

const uids = [
  { id: 'bybit', name: 'Bybit', img: '/assets/bybit-thumbnail.webp' },
  { id: 'deepcoin', name: 'DeepCoin', img: '/assets/deepcoin.png' },
  { id: 'bitget', name: 'Bitget', img: '/assets/bitget.png' },
  { id: 'okx', name: 'OKX', img: '/assets/okx.png' },
  { id: 'bingx', name: 'BingX', img: '/assets/bingx.png' },
  { id: 'bitmart', name: 'BitMart', img: '/assets/bitmart.png' },
  { id: 'coincatch', name: 'CoinCatch', img: '/assets/coin-catch.png' },
  { id: 'bitmex', name: 'BitMEX', img: '/assets/bitmax.png' },
  { id: 'bitvenus', name: 'BitVenus', img: '/assets/bitvenus.png' },
  { id: 'htx', name: 'HTX', img: '/assets/htx.png' },
  { id: 'tethermax', name: '테더맥스 추천인으로 먼저 가입할게요', img: '/assets/TethermaxIcon.webp' },
];

const AllUid = () => {
  const [selectedUid, setSelectedUid] = useState(null);
  const [showNested, setShowNested] = useState(false);

  const handleGoBack = () => {
    setSelectedUid(null);
    setShowNested(false);
  };

  const handleNestedButtonClick = () => {
    setShowNested(true);
  };

  return (
    <section className="max-w-[840px] mx-auto w-full bg-white">
      {!showNested && (
        <>
          <p className="text-gray_900 text-2xl px-6 f-pretendard-b pt-8">
            테더맥스 추천인으로 가입한 <br />거래소가 어디인가요?
          </p>
          <div className='mt-8'>
            {uids.map((uid) => (
              <button
                key={uid.id}
                type='button'
                className='flex hover:bg-gray_50 items-center justify-between h-[72px] px-6 w-full'
                onClick={() => setSelectedUid(uid)}
              >
                <div className='flex items-center'>
                  <img src={uid.img} alt={uid.name} className='w-10 h-10 rounded-full mr-4' />
                  <p className="text-gray_700 text-[19px] f-pretendard-b">{uid.name}</p>
                </div>
                <img src="/assets/right-arrow.svg" alt="right-arrow" />
              </button>
            ))}
          </div>
        </>
      )}

      {selectedUid && !showNested && (
        <Popup
          uid={selectedUid}
          onGoBack={() => setSelectedUid(null)}
          onNestedButtonClick={handleNestedButtonClick}
        />
      )}

      {showNested && selectedUid && (
        <NestedUid uid={selectedUid} onGoBack={handleGoBack} />
      )}
    </section>
  );
};

export default AllUid;
