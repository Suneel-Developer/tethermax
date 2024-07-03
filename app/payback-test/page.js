"use client"
import { useRouter } from 'next/navigation';
import Header from '../components/Header'
import Topbar from '../components/Topbar'

const PaybackTest = () => {
    const router = useRouter();

    const navigatetoPayback = () => {
        router.push('/payback');
    };
    return (
        <>
            <section>
                <div className='hidden md:block'><Header /></div>
                <div className='block md:hidden'><Topbar /></div>
            </section>
            <section>
                <div className='max-w-[840px] mx-auto w-full flex flex-col gap-9 pt-14 pb-8'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-gray_900 text-[28px] f-pretendard-b leading-[150%] break-keep text-center mb-2'>내가 받을 돈은 <br /> 얼마일까요?</h2>
                        <div className='flex flex-col gap-2 my-8'>
                            <div className='flex items-center justify-center gap-2'>
                                <img src="/assets/01.svg" alt="celebrate" />
                                <h4 className='text-gray_900 text-[15px] f-pretendard-b text-center'>30초만에 확인 가능 </h4>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <img src="/assets/dollar.svg" alt="dollar" className='w-6 h-6' />
                                <h4 className='text-gray_900 text-[15px] f-pretendard-b text-center'>내가 받을 금액 확인하고 받는 <strong className="text-blue_700">5 USDT</strong> 쿠폰</h4>
                            </div>

                        </div>
                        <img src="/assets/yellow-dolllar.png" alt="Notification" className='h-[250px] w-[250px] mx-auto' />
                    </div>
                </div>

                <div className='bg-[#e9f3ff]'>
                    <div className='pt-8 pb-14 px-6 max-w-[840px] mx-auto w-full flex justify-center flex-col items-center'>
                        <img src="/assets/_timer.svg" alt="_timer" />
                        <h2 className='text-gray_500 mt-3 text-2xl text-center f-pretendard-b leading-[34px]'>페이백 테스트</h2>
                        <h2 className='text-gray_900 text-2xl text-center f-pretendard-b leading-[34px]'>평균 소요시간 30초</h2>
                        <h2 className='text-gray_400 text-[17px] text-center f-pretendard-sm leading-[34px] mt-2'>간단하지만 정확하게 만들었어요</h2>
                    </div>
                </div>

                <div className='bg-gray_50'>
                    <div className='pt-8 pb-14 px-6 max-w-[840px] mx-auto w-full flex justify-center flex-col items-center'>
                        <img src="/assets/_payback.svg" alt="payback" />
                        <h4 className='text-gray_900 text-2xl text-center f-pretendard-b leading-[34px]'>페이백 금액 <br />얼마나 돌려받을지 궁금하시죠?</h4>
                        <h3 className='text-gray_400 mt-2 text-[17px] text-center f-pretendard-sm leading-[26px]'>다른 트레이더님들의 데이터를 기반으로 <br />실제 내가 받을 수 있는 금액을 알 수 있어요</h3>

                        <button onClick={navigatetoPayback} className='bg-blue_700 flex-1 text-center text-lg mt-6 py-[14px] f-pretendard-b h-12 rounded-xl px-3 text-white'>내가 받을 돈 확인하고 5 USTD 받기</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PaybackTest