import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';


const Hero = ({ handleButtonClick }) => {
    useEffect(() => {
        console.log('Swiper mounted');
    }, []);

    return (
        <section className='max-w-[840px] mx-auto w-full '>
            <div className='bg-white relative h-full paybackheight'>
                <div className='pt-8 pb-4 px-5 md:px-6 flex flex-col w-full gap-6'>
                    <div>
                        <h4 className='text-gray_900 text-2xl f-pretendard-b mb-2 leading-[150%]'>
                            지금 다른 사람들이 <br /> 돌려받는 수수료는 얼마?
                        </h4>
                        <p className='text-gray_500 text-base f-pretendard-m leading-[150%]'>
                            간단하게 조회하세요. 40초면 끝나요!
                        </p>
                    </div>

                    <div>
                        <Swiper
                            slidesPerView={1}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                        >
                            <SwiperSlide>
                                <div className="bg-[#cff0ff] rounded-2xl pt-7 md:pt-[54px] px-[64px] pb-7 flex items-center justify-center flex-col w-full">
                                    <img src="/assets/paybackslide_1.png" alt="밈코인 3만배 수익 도전해요" className='w-[250px] md:w-[303px] h-[170px] md:h-[220px] mb-8' />
                                    <p className='text-gray_500 text-[15px] text-center f-pretendard-r'>밈코인 3만배 수익 도전해요</p>
                                    <h4 className='text-blue_700 text-[28px] f-pretendard-b text-center'>1,130,400원</h4>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-[#ffe3e5] rounded-2xl pt-7 md:pt-[54px] px-[64px] pb-7 flex items-center justify-center flex-col w-full">
                                    <img src="/assets/paybackslide_2.png" alt="에어드랍 작업 더 쉽게해요" className='w-[250px] md:w-[303px] h-[170px] md:h-[220px] mb-8' />
                                    <p className='text-gray_500 text-[15px] text-center f-pretendard-r'>에어드랍 작업 더 쉽게해요</p>
                                    <h4 className='text-blue_700 text-[28px] f-pretendard-b text-center'>8,932,730원</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[#fffdc1] rounded-2xl pt-7 md:pt-[54px] px-[64px] pb-7 flex items-center justify-center flex-col w-full">
                                    <img src="/assets/paybackslide_3.png" alt="째리던 알트 매수할까요" className='w-[250px] md:w-[303px] h-[170px] md:h-[220px] mb-8' />
                                    <p className='text-gray_500 text-[15px] text-center f-pretendard-r'>째리던 알트 매수할까요?</p>
                                    <h4 className='text-blue_700 text-[28px] f-pretendard-b text-center'>4,460,900원</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="bg-[#ffebcd] rounded-2xl pt-7 md:pt-[54px] px-[64px] pb-7 flex items-center justify-center flex-col w-full">
                                    <img src="/assets/paybackslide_4.png" alt="테이킹하고 이자농사 시작할까요" className='w-[250px] md:w-[303px] h-[170px] md:h-[220px] mb-8' />
                                    <p className='text-gray_500 text-[15px] text-center f-pretendard-r'>테이킹하고 이자농사 시작할까요?</p>
                                    <h4 className='text-blue_700 text-[28px] f-pretendard-b text-center'>897,820원</h4>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className='flex justify-between w-full z-30 paybackbtn absolute bottom-4'>
                        <button onClick={handleButtonClick} className='bg-blue_700 h-14 text-lg f-pretendard-b text-white text-center px-3 rounded-xl flex justify-center items-center w-full'>
                            나도 거래 수수료 환급받기
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
