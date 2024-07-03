import React from 'react'
import Header from '../components/Header'

const Download = () => {
    return (
        <section className=" downloadbg">

            <Header />
            <div className='z-50 max-w-[792px] flex flex-col gap-2 w-full mx-auto px-5'>
                <h2 className='mt-14 text-[28px] md:text-[32px] f-pretendard-b text-center text-gray_900'>페이백이 필요한 <br />모든 순간, <strong className="text-blue_700">테더맥스</strong></h2>
                <p className="text-gray_500 text-center text-[17px] f-pretendard-m">모바일 앱을 통해 언제 어디서나 쉽게 <br />페이백 받을 수 있게 테더맥스를 이용하세요</p>

                <div className='mt-10 mb-14 flex items-center justify-between gap-4 flex-col md:flex-row'>
                    <div className='flex flex-col cursor-pointer justify-between gap-6 p-4 bg-white border w-full flex-1 border-blue_700 rounded-2xl' style={{ boxShadow: "4px 4px 16px 0 rgba(58,66,85,.08)" }}>
                        <div className='flex items-center justify-between w-full'>
                            <img src="/assets/play_store.webp" alt="play_store" className='w-10 h-10 rounded-full' />

                            <div className='ml-4 flex-1 flex flex-col gap-1'>
                                <span className="text-gray_500 text-[13px] f-pretendard-sm">구글 스토어</span>
                                <span className="text-gray_900 text-[17px] f-pretendard-b">모바일 앱 다운로드</span>
                            </div>
                            <img src="/assets/right-arrow.svg" alt="right-arrow" />
                        </div>

                        <div className='bg-gray_50 flex items-center justify-between py-[14px] px-4 rounded-lg'>
                            <span className="text-gray_900 text-[13px] f-pretendard-sm">앱 다운 받고</span>
                            <span className="text-blue_700 text-[13px] f-pretendard-b">앱 다운 받고</span>

                        </div>
                    </div>

                    <div className='flex flex-col cursor-pointer justify-between gap-6 p-4 bg-white border w-full flex-1 border-blue_700 rounded-2xl' style={{ boxShadow: "4px 4px 16px 0 rgba(58,66,85,.08)" }}>
                        <div className='flex items-center justify-between w-full'>
                            <img src="/assets/apple.webp" alt="apple" className='w-10 h-10 rounded-full' />

                            <div className='ml-4 flex-1 flex flex-col gap-1'>
                                <span className="text-gray_500 text-[13px] f-pretendard-sm">앱 스토어</span>
                                <span className="text-gray_900 text-[17px] f-pretendard-b">모바일 앱 다운로드</span>
                            </div>
                            <img src="/assets/right-arrow.svg" alt="right-arrow" />
                        </div>

                        <div className='bg-gray_50 flex items-center justify-between py-[14px] px-4 rounded-lg'>
                            <span className="text-gray_900 text-[13px] f-pretendard-sm">앱 다운 받고</span>
                            <span className="text-blue_700 text-[13px] f-pretendard-b">앱 다운 받고</span>

                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-12 pb-[72px]'>
                <div className='max-w-[792px] w-full mx-auto'>
                    <div className='px-5 flex flex-col gap-3'>
                        <p className="text-2xl text-gray_900 text-center f-pretendard-sm"><strong className="text-blue_700">앱에서만</strong>  볼 수 있는 다양한 혜택, <br />대규모 거래소 상금까지</p>
                        <p className="text-[17px] text-gray_500 text-center f-pretendard-sm">테더맥스의 즐거운 혜택과 더불어 <br />엄청난 상금의 거래소 대회도 놓치지 마세요</p>
                    </div>

                    <div className='max-w-[620px] mx-auto w-full flex-wrap md:flex-nowrap flex justify-center items-center mt-11 gap-4 px-5'>
                        <div className='bg-blue_300 pt-9 md:pt-12 pb-6 h-[190px] md:h-[249px] w-[152px] md:w-[187px] flex items-center flex-col justify-center gap-4 rounded-[32px]'>
                            <img src="/assets/tetherMax-competitions-&-events.svg" alt="tetherMax-competitions-&-events" className='w-[72px] md:w-[96px] h-[72px] md:h-[96px]' />
                            <span className="text-base md:text-xl px-2 text-white f-pretendard-b text-center">테더맥스 <br />대회 & 이벤트</span>
                        </div>
                        <div className='bg-blue_400 pt-9 md:pt-12 pb-6 h-[190px] md:h-[249px] w-[152px] md:w-[187px] flex items-center flex-col justify-center gap-4 rounded-[32px]'>
                            <img src="/assets/exchange-large-scale-prize-money.svg" alt="exchange-large-scale-prize-money" className='w-[72px] md:w-[96px] h-[72px] md:h-[96px]' />
                            <span className="text-base md:text-xl px-2 text-white f-pretendard-b text-center">거래소 <br /> 대규모 상금 대회</span>
                        </div>
                        <div className='bg-green_100 pt-9 md:pt-12 pb-6 h-[190px] md:h-[249px] w-[152px] md:w-[187px] flex items-center flex-col justify-center gap-4 rounded-[32px]'>
                            <img src="/assets/exchange-airdrop-event.svg" alt="exchange-airdrop-event" className='w-[72px] md:w-[96px] h-[72px] md:h-[96px]' />
                            <span className="text-base md:text-xl px-2 text-white f-pretendard-b text-center">거래소 <br />에어드랍 이벤트</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray_50 py-[72px] px-5 flex flex-col items-center justify-center gap-12 w-full">
                <div className='w-[102px] md:w-[160px] bg-blue_700 flex items-center justify-center h-[102px] md:h-[160px] rounded-[22px] md:rounded-[40px]' style={{ boxShadow: "0 8px 16px rgba(0,103,255,.5)" }}>
                    <img src="/assets/white-logo.svg" alt="" className='w-[64px] md:w-[100px]' />
                </div>

                <p className="text-2xl md:text-[28px] text-gray_900 text-center f-pretendard-b leading-">테더맥스 앱으로 PC보다 <br /> <strong className="text-blue_700">빠르고 간편하게 페이백</strong> 해보세요!</p>
            </div>

            <div className='py-12 px-5 sm:px-10 w-full'>
                <div className='max-w-[792px] mx-auto w-full flex items-center flex-col sm:flex-row justify-center flex-wrap gap-6'>
                    <div className='text-center md:text-start flex-1'>
                        <span className="text-blue_700 text-[17px] f-pretendard-sm leading-[150%]">트레이더님 혹시</span>
                        <p className="text-gray_900 text-2xl md:text-[32px] f-pretendard-b leading-[150%] pt-3 pb-8 md:pb-0">이미 테더맥스를 <br />사용하고 계시나요?</p>
                    </div>

                    <div className='relative mx-auto w-[290px] text-center flex justify-center items-center'>
                        <img src="/assets/phone_view.webp" alt="phone_view" />

                        <div className='pt-4 px-5 pb-5 absolute w-[290px] h-[185px] rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 downloadboxbg' style={{ boxShadow: "0 4px 8px rgba(48,61,69,.25)" }}>
                            <div className='border-b border-[#d8dde3] flex items-center justify-between pb-4'>
                                <p className="text-gray_900 text-lg f-pretendard-b"><strong className="text-blue_700">페이백 리워드</strong>를 <br />수령하셨습니다!</p>

                                <div className='w-11 h-11 rounded-full flex items-center justify-center bg-blue_700'>
                                    <img src="/assets/white-logo.svg" alt="logo" className='w-[30px] h-[30px]' />
                                </div>
                            </div>

                            <ul className='flex flex-col gap-[13px] pt-[17px] pb-5'>
                                <li className='flex items-center'>
                                    <div className='w-6 h-6 flex items-center justify-center rounded-lg bg-gray_50 mr-[6px]'>
                                        <img src="/assets/house.webp" alt="house" />
                                    </div>
                                    <p className="text-gray_700 text-[13px] mr-4 f-pretendard-b">거래소</p>
                                    <p className="text-gray_900 text-[15px] f-pretendard-b">Bitget, Bybit, OKX</p>
                                </li>
                                <li className='flex items-center'>
                                    <div className='w-6 h-6 flex items-center justify-center rounded-lg bg-gray_50 mr-[6px]'>
                                        <img src="/assets/money-dollay.webp" alt="money-dollar" />
                                    </div>
                                    <p className="text-gray_700 text-[13px] mr-4 f-pretendard-b">금액</p>
                                    <p className="text-gray_900 text-[15px] f-pretendard-b">4,588 USDT</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-blue_700 flex flex-col items-center justify-center gap-9 py-[72px] px-5'>
                <div className='flex flex-col gap-8 text-center'>
                    <p className="text-white text-2xl md:text-[32px] text-center f-pretendard-b leading-[150%]">그렇다면, <br/>테더맥스 앱도 이용해보세요!</p>


                    <ul className='flex items-center gap-5 px-5 justify-center md:justify-between flex-col md:flex-row flex-wrap mt-4 md:mt-8'>
                        <li className='flex items-center justify-center cursor-pointer w-[155px] md:w-[290px] h-[45px] md:h-[84px] rounded-[42px] border border-white'>
                            <img src="/assets/app-store.svg" alt="app-store" className='w-[100px] md:w-[200px] h-[27px] md:h-[50px]' />
                        </li>
                        <li className='flex items-center justify-center cursor-pointer w-[155px] md:w-[290px] h-[45px] md:h-[84px] rounded-[42px] border border-white'>
                            <img src="/assets/google-play.svg" alt="google-play" className='w-[100px] md:w-[200px] h-[27px] md:h-[50px]' />
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Download