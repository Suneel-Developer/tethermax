import React from 'react'


const 




StepsStep = () => {
  return (
    <section>
      <div className='pt-8 md:pt-9 flex flex-col'>
        <p className='text-[22px] text-gray_900 mx-5 leading-[32px] f-pretendard-b'>HTX 페이백 받는 방법</p>

        <div className='mt-2'>
          <div className='mt-[14px] px-5 flex items-center justify-center'>
            <div className='rounded-full mr-4 bg-gray_55 w-7 h-7 flex justify-center items-center text-gray_700 text-center text-[13px] f-pretendard-b'>
              <span>1</span>
            </div>
            <p className='flex-1 text-gray_900 text-[17px] f-pretendard-b'>아래 링크로 가입하기</p>
          </div>
          <div className='mr-6 ml-[33px] mt-2 flex'>
            <div className='w-[3px] h-[93px] rounded-[1.5px] bg-gray_100 mr-6'></div>
            <button className='flex justify-between items-center flex-auto'>
              <div className='flex items-center'>
                <img src="/assets/htx.png" alt="HTX " className='w-[30px] h-[30px] rounded-full mr-[10px]' />
                <p className='text-[19px] text-blue_700 f-pretendard-b text-left'>HTX링크 (테더맥스 전용)</p>
              </div>
            </button>
          </div>
        </div>

        <div className='mt-2'>
          <div className='px-5 flex items-center justify-center'>
            <div className='rounded-full mr-4 bg-gray_55 w-7 h-7 flex justify-center items-center text-gray_700 text-center text-[13px] f-pretendard-b'>
              <span>2</span>
            </div>
            <p className='flex-1 text-gray_900 text-[17px] f-pretendard-b'>HTX에서 KYC 인증하고</p>
          </div>
          <div className='mr-6 ml-[33px] mt-2 flex'>
            <div className='w-[3px] h-[39px] rounded-[1.5px] bg-gray_100 mr-6'></div>

          </div>
        </div>

        <div className='mt-2'>
          <div className='px-5 flex items-center justify-center'>
            <div className='rounded-full mr-4 bg-gray_55 w-7 h-7 flex justify-center items-center text-gray_700 text-center text-[13px] f-pretendard-b'>
              <span>3</span>
            </div>
            <p className='flex-1 text-gray_900 text-[17px] f-pretendard-b'>거래하고</p>
          </div>
          <div className='mr-6 ml-[33px] mt-2 flex'>
            <div className='w-[3px] h-[39px] rounded-[1.5px] bg-gray_100 mr-6'></div>

          </div>
        </div>

        <div className='mt-2 mb-8'>
          <div className='px-5 flex items-center justify-center'>
            <div className='rounded-full mr-4 bg-gray_55 w-7 h-7 flex justify-center items-center text-gray_700 text-center text-[13px] f-pretendard-b'>
              <span>4</span>
            </div>
            <p className='flex-1 text-gray_900 text-[17px] f-pretendard-b'>환급 신청하면 끝</p>
          </div>
        </div>
      </div>
      <div className='h-4 bg-gray_55 w-full'></div>
    </section>
  )
}

export default StepsStep