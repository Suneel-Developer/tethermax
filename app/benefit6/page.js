"use client"
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Topbar from '../components/Topbar';
import Image from 'next/image';

const Benefit6 = () => {
    const router = useRouter();

    const navigatetoWithdrawal = () => {
        router.push('/withdrawal');
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
                        <h2 className='text-gray_900 text-[28px] f-pretendard-b leading-[150%] break-keep text-center mb-2'>첫 페이백 받고 <br /> <strong className="text-blue_700">쿠폰 선물까지?!</strong></h2>
                        <h3 className='text-gray_400 text-[17px] f-pretendard-sm leading-[26px] text-center'>페이백 출금은 50 USDT 이상부터 가능해요</h3>

                        <div className='flex flex-col gap-2 my-8'>
                            <div className='flex items-center justify-center gap-2'>
                                <Image src="/assets/celebrate.svg" alt="celebrate" width={24} height={24} />
                                <h4 className='text-gray_900 text-[15px] f-pretendard-b text-center'>떠먹여주는 혜택!</h4>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <Image src="/assets/dollar.svg" alt="dollar" width={24} height={24} />
                                <h4 className='text-gray_900 text-[15px] f-pretendard-b text-center'>첫 페이백 출금 이후 받는 <strong className="text-blue_700">15 USDT</strong> 쿠폰</h4>
                            </div>

                        </div>
                        <Image src="/assets/Payback.gif" alt="Payback" className='h-[240px] w-[240px] mx-auto' width={24} height={24} />
                    </div>
                </div>

                <div className='bg-gray_50'>
                    <div className='pt-8 pb-14 px-6 max-w-[840px] mx-auto w-full flex justify-center flex-col items-center'>
                        <Image src="/assets/dollar.svg" alt="dollar" width={40} height={40} />
                        <h4 className='text-gray_900 text-2xl text-center f-pretendard-b leading-[34px] mt-3'>첫 페이백 받고 또 받는 <br /><strong className="text-blue_700">15 USDT</strong> 쿠폰!</h4>
                        <h3 className='text-gray_400 mt-2 text-[17px] text-center f-pretendard-sm leading-[26px]'>출금이 가능한 USDT 쿠폰이에요</h3>

                        <button onClick={navigatetoWithdrawal} className='bg-blue_700 flex-1 text-center text-lg mt-6 py-[14px] f-pretendard-b h-12 rounded-xl px-3 text-white'>페이백 출금하고 15 USDT 받기</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Benefit6