import React from 'react'

const SellingPoints = () => {
    return (
        <section className="px-6 pt-[120px]">
            <p className="text-[17px] f-pretendard-m text-white leading-[150%] text-center">트레이더님한테만 알려드릴게요!</p>
            <p className="text-[32px] f-pretendard-b text-white leading-[150%] text-center mt-4">테더맥스의 차별점</p>
            <p className="text-[17px] f-pretendard-m text-gray_400 leading-[150%] text-center mt-4">테더맥스는 다른 페이백 서비스들과 달라요</p>

            <div className='mt-12 flex flex-col md:flex-row justify-center items-center md:items-start'>
                <div className="flex flex-row md:flex-col items-center mb-6 md:mb-0 w-full xxs:w-[335px] md:w-auto flex-auto">
                    <div className='p-5 md:p-[26px] mb-0 md:mb-6 mr-10 md:mr-0 bg-[#242b3a] rounded-full flex justify-center items-center'>
                        <img src="/assets/firstOne.webp" alt="firstOne" className='w-14 md:w-[72px] h-14 md:h-[72px]' />
                    </div>

                    <div className='flex-1'>
                        <p className="text-left md:text-center text-white text-[17px] f-pretendard-b leading-[26px]">최초의 페이백 서비스</p>
                        <p className="text-left md:text-center text-white text-2xl md:text-[28px] f-pretendard-b leading-[34px] md:leading-[38px] mt-1">22년 08월 시작</p>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col items-center mb-6 md:mb-0 w-full xxs:w-[335px] md:w-auto flex-auto">
                    <div className='p-5 md:p-[26px] mb-0 md:mb-6 mr-10 md:mr-0 bg-[#242b3a] rounded-full flex justify-center items-center'>
                        <img src="/assets/thepapper.webp" alt="thepapper" className='w-14 md:w-[72px] h-14 md:h-[72px]' />
                    </div>

                    <div className='flex-1'>
                        <p className="text-left md:text-center text-white text-[17px] f-pretendard-b leading-[26px]">높은 안전성</p>
                        <p className="text-left md:text-center text-white text-2xl md:text-[28px] f-pretendard-b leading-[34px] md:leading-[38px] mt-1">거래소와 공식 계약</p>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col items-center mb-6 md:mb-0 w-full xxs:w-[335px] md:w-auto flex-auto">
                    <div className='p-5 md:p-[26px] mb-0 md:mb-6 mr-10 md:mr-0 bg-[#242b3a] rounded-full flex justify-center items-center'>
                        <img src="/assets/family.webp" alt="family" className='w-14 md:w-[72px] h-14 md:h-[72px]' />
                    </div>

                    <div className='flex-1'>
                        <p className="text-left md:text-center text-white text-[17px] f-pretendard-b leading-[26px]">많은 유저들의 선택</p>
                        <p className="text-left md:text-center text-white text-2xl md:text-[28px] f-pretendard-b leading-[34px] md:leading-[38px] mt-1">+23,000 명</p>
                    </div>
                </div>
            </div>

            <div className='mt-[120px] px-6'>
                <div className='rounded-[32px] py-[64px] bg-[#1f2024] flex flex-col justify-center items-center'>
                    <div className='bg-blue_700 rounded-[32px] flex justify-center items-center w-[100px] md:w-[132px] h-[100px] md:h-[132px]'>
                        <img src="/assets/logo.svg" alt="logo" />
                    </div>
                    <p className='mt-10 text-white text-center f-pretendard-b text-2xl md:text-[28px] leading-[34px] md:leading-[42px]'>
                        주요 파트너사들과 <br />
                        <strong className="text-blue_700">공식 계약을 체결</strong>
                        한 곳은 <br />
                        오직 테더맥스 뿐입니다
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SellingPoints