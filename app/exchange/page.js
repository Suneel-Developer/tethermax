"use client"
import { useRouter } from 'next/navigation';
import Header from '../components/Header'
import Topbar from '../components/Topbar'

const Exchange = () => {

    const router = useRouter();

    const navigatetoUidlinking = () => {
        router.push('/uidlinking');
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
                        <h2 className='text-gray_900 text-[28px] f-pretendard-b leading-[150%] break-keep text-center mb-2'>페이백 랭킹 안에 들면 <br /> <strong className="text-blue_700">USDT 쿠폰</strong> 드려요</h2>
                        <h3 className='text-gray_400 text-[17px] f-pretendard-sm leading-[26px] text-center'>페이백 출금은 50 USDT 이상부터 가능해요</h3>

                        <div className='mt-8 flex justify-center items-center'>
                            <div className='flex flex-col gap-6 p-4 rounded-[20px] border-[3px] border-gray_50'>
                                <div className='bg-gray_400 py-3 px-4 rounded-2xl flex items-center'>
                                    <div className='bg-blue_700 rounded-[6px] w-6 h-6 flex items-center justify-center mr-3'>
                                        <img src="/assets/white-logo.svg" alt="" />
                                    </div>
                                    <h2 className='text-white text-[15px] f-pretendard-b'>매달 최대 100 USDT 받아요</h2>
                                </div>

                                <div className='flex flex-col items-center gap-3'>
                                    <img src="/assets/celebrate.svg" alt="celebrate" className='w-10 h-10' />
                                    <h4 className='text-gray_900 text-center text-xl leading-[30px] f-pretendard-b'>트레이더님의 <br />랭킹을 확인해보세요!</h4>
                                </div>

                                <div className='bg-gray_55 flex items-center justify-between rounded-2xl py-3 px-4'>
                                    <h5 className='text-gray_700 text-[15px] f-pretendard-m'>BYBIT</h5>
                                    <h5 className='text-gray_900 text-[15px] f-pretendard-sm'>123456***</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-blue_700 py-8'>
                    <div className='px-6 max-w-[840px] mx-auto w-full flex justify-center flex-col items-center gap-8'>
                        <h4 className='text-white text-2xl text-center f-pretendard-b leading-[34px]'>랭킹에 따라 쿠폰이 지급돼요!</h4>

                        <div className='bg-gray_50 flex flex-col gap-3 py-4 px-3 rounded-2xl w-full'>
                            <li className='flex justify-between items-center gap-[10px] py-3 pl-4 pr-[14px] w-full bg-white rounded-xl'>
                                <img src="/assets/medal1.svg" alt="medal1" />
                                <span className="text-gray_700 text-[15px] f-pretendard-b flex-1">1등</span>
                                <span className="text-blue_700 text-[17px] f-pretendard-b">100 USDT</span>
                            </li>
                            <li className='flex justify-between items-center gap-[10px] py-3 pl-4 pr-[14px] w-full bg-white rounded-xl'>
                                <img src="/assets/medal2.svg" alt="medal2" />
                                <span className="text-gray_700 text-[15px] f-pretendard-b flex-1">2등</span>
                                <span className="text-blue_700 text-[17px] f-pretendard-b">50 USDT</span>
                            </li>
                            <li className='flex justify-between items-center gap-[10px] py-3 pl-4 pr-[14px] w-full bg-white rounded-xl'>
                                <img src="/assets/medal3.svg" alt="medal3" />
                                <span className="text-gray_700 text-[15px] f-pretendard-b flex-1">3등</span>
                                <span className="text-blue_700 text-[17px] f-pretendard-b">20 USDT</span>
                            </li>
                            <li className='flex justify-between items-center gap-[10px] py-3 pl-4 pr-[14px] w-full bg-white rounded-xl'>
                                <img src="/assets/medal5.svg" alt="medal4" />
                                <span className="text-gray_700 text-[15px] f-pretendard-b flex-1">상위 10% 이내</span>
                                <span className="text-blue_700 text-[17px] f-pretendard-b">10 USDT</span>
                            </li>
                        </div>
                    </div>
                </div>

                <div className='bg-blue_50'>
                    <div className='pt-8 pb-14 px-6 max-w-[840px] mx-auto w-full flex justify-center flex-col items-center gap-4'>
                        <img src="/assets/HiBit.webp" alt="HiBit" className='w-20 h-20 rounded-full' />

                        <div className='flex flex-col gap-2'>
                            <h2 className='text-gray_900 text-[22px] text-center f-pretendard-b leading-[32px]'>랭킹을 확인할 수 없어요</h2>
                            <h3 className='text-gray_400 text-[17px] text-center f-pretendard-sm leading-[26px]'>UID를 연동하면 내 랭킹을 확인 할 수 있어요</h3>
                        </div>

                        <button onClick={navigatetoUidlinking} className='bg-blue_700 flex-1 text-center text-lg py-[14px] f-pretendard-b h-12 rounded-xl px-3 text-white'>UID 연동하러 가기</button>
                    </div>
                </div>

                <div className='bg-gray_55 py-6 px-5 flex flex-col'>
                    <div className='max-w-[840px] mx-auto w-full px-6'>
                        <h2 className='text-gray_700 text-[15px] f-pretendard-b'>유의사항</h2>

                        <ul className="pl-4 mt-5 list-disc text-gray_500 text-[15px] f-pretendard-m">
                            <li>매월 1일에서 말일까지(UTC 기준) 페이백 지급된 사항에 대해서만 적용됩니다.</li>
                            <li>이벤트 리워드는 해당 월의 페이백 내역을 산정해 말일 이후 5일 이내 지급됩니다.</li>
                            <li>해당 월에 페이백 내역이 있는 트레이더님들을 대상으로 진행하는 이벤트입니다.</li>
                            <li>거래소마다 개별로 진행하기 때문에 두 개 이상의 거래소에서 리워드를 받을 수 있습니다.</li>
                            <li>순위 산정 기준은 테더맥스 계정에 연동된 각각의 UID 기준입니다.</li>
                            <li>본 혜택은 당사의 사정에 따라 언제든 변경될 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Exchange