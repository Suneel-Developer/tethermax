import React from 'react'

const StatisticsStep = () => {


  return (
    <section className='mt-8'>
      <div className='h-4 bg-gray_55 w-full'></div>
      <div className='pt-8 md:pt-9'>
        <p className='text-[22px] text-gray_900 mx-5 leading-[32px] f-pretendard-b'>Bitget 통계 데이터를 알아볼까요?</p>

        <div>
          <div className='mt-11 px-6 flex items-center justify-between'>
            <p className='text-xl md:text-[22px] text-gray_900 f-pretendard-b'>평균 환급액</p>
            <p className='text-lg f-pretendard-b text-blue_700'>30 만원</p>
          </div>

          <div className='mx-0 md:mx-[128px] mt-[35px] flex justify-between gap-4 items-end px-[31px]'>

            <div className='flex flex-col justify-center items-center gap-2'>
              <span className='text-sm text-gray_400 f-pretendard-b'>5월월</span>
              <div className='h-3 w-10 rounded-lg bg-[#CBD5E1] hover:bg-gray_300 transition-colors duration-300'></div>
              <span className='text-sm text-gray_400 f-pretendard-b'>2월</span>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <span className='text-sm text-gray_400 f-pretendard-b'>32월월</span>
              <div className='h-16 w-10 rounded-lg bg-[#CBD5E1] hover:bg-gray_300 transition-colors duration-300'></div>
              <span className='text-sm text-gray_400 f-pretendard-b'>3월</span>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <span className='text-sm text-gray_400 f-pretendard-b'>44월월</span>
              <div className='h-32 w-10 rounded-lg bg-[#CBD5E1] hover:bg-gray_300 transition-colors duration-300'></div>
              <span className='text-sm text-gray_400 f-pretendard-b'>4월</span>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <span className='text-sm text-gray_400 f-pretendard-b'>39월월</span>
              <div className='h-20 w-10 rounded-lg bg-[#CBD5E1] hover:bg-gray_300 transition-colors duration-300'></div>
              <span className='text-sm text-gray_400 f-pretendard-b'>5월</span>
            </div>
          </div>

          <p className='mt-7 mb-8 text-gray_400 text-center text-[13px] f-pretendard-m px-5 break-keep'>
            ※ 최근 4개월간 테더맥스에서 환급한 금액의 통계입니다.
          </p>

          <div className='mt-8'>
            <p className='text-gray_900 text-[22px] f-pretendard-b px-5 leading-[32px]'>Bitget의 테더맥스 페이백 왕</p>
            <p className='text-gray_400 text-[15px] mt-2 f-pretendard-sm px-5 leading-[150%]'>최근 30일 간 테더맥스가 돌려준 페이백 금액으로 순위를 매겼어요</p>

            <div className='flex flex-col mt-7 mb-8 px-5 gap-[30px]'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center'>
                  <img src="/assets/Devil.webp" alt="Devil" className='w-10 h-10 rounded-lg mr-4' />
                  <div>
                    <p className='text-gray_400 text-[13px] f-pretendard-sm'>*****6249</p>
                    <p className='text-gray_900 text-[17px] f-pretendard-b'>26477.37 USDT</p>
                  </div>
                </div>
                <img src="/assets/medal1.svg" alt="medal1" />
              </div>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center'>
                  <img src="/assets/GameGhost.webp" alt="GameGhost" className='w-10 h-10 rounded-lg mr-4' />
                  <div>
                    <p className='text-gray_400 text-[13px] f-pretendard-sm'>*****6249</p>
                    <p className='text-gray_900 text-[17px] f-pretendard-b'>22422.53 USDT</p>
                  </div>
                </div>
                <img src="/assets/medal1.svg" alt="medal1" />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='h-4 bg-gray_55 w-full'></div>

    </section>
  )
}

export default StatisticsStep