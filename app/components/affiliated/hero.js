import React from 'react'

const Hero = () => {
    return (
        <section className='affiliated-hero'>
            <div className='pt-[64px] max-w-[840px] w-full mx-auto'>
                <h1 className='text-[28px] md:text-[32px] text-gray_900 text-center f-pretendard-b' style={{ lineHeight: "1.5" }}>테더맥스의 <br /> <strong className='text-[#60c] hero-text'>제휴 거래소</strong>를 소개합니다!</h1>
                <h2 className='text-[17px] text-gray_700 f-pretendard-m text-center mt-2'>세계 최고의 가상자산 거래소들과 함께하는 <strong className='f-pretendard-b text-blue_700'>테더맥스</strong></h2>
                <p className='mb-10 md:mb-[70px] text-center text-xs text-gray_400 f-pretendard-m mt-1'>※ 주요 파트너사들과 <strong className='text-blue_700'>공식 계약을 체결</strong>한 곳은 테더맥스 뿐입니다.</p>

            </div>
        </section>
    )
}

export default Hero