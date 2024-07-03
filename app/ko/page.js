"use client"
import { useRouter } from 'next/navigation';
import Header from '../components/Header'
import SearchSection from '../components/home/SearchSection'
import Footer from '../components/Footer'
import PartnerExchange from '../components/PartnerExchange';
import ExchangePartners from '../components/home/exchangePartners';

const Ko = () => {
    const router = useRouter();

    // Function to handle navigation to the Affiliated page
    const navigateToAffiliated = () => {
        router.push('/affiliated');
    };

    // Function to handle navigation to the PayBack page
    const navigateToPayback = () => {
        router.push('/payback');
    };
    return (
        <main className='bg-gray_50'>
            <Header />

            <div className='max-w-[840px] w-full mx-auto flex flex-col bg-white'>
                <SearchSection />
                <ExchangePartners />

                <div className='mb-10 py-0 md:py-6 flex flex-col gap-5'>
                    <div className='px-6 flex justify-between items-center'>
                        <div className='flex flex-col gap-2 flex-auto'>
                            <h3 className='text-gray_900 f-pretendard-b text-[21px] leading-[32px]'>테더맥스 제휴 거래소</h3>
                            <p className='text-gray_400 f-pretendard-sm text-sm hidden md:block'>페이백은 물론이고 트레이딩 대회까지 준비했어요</p>
                        </div>

                        <button className='flex items-center gap-1' onClick={navigateToAffiliated}>
                            <span className='text-gray_400 f-pretendard-sm text-base w-[70px]'>전체보기</span>
                            <img src="/assets/right-arrow.svg" alt="right-arrow" />
                        </button>
                    </div>
                    <PartnerExchange />
                </div>

                <div>
                    <div className='h-4 bg-gray_55 w-full'></div>
                    <div className='p-6 flex items-center gap-4 cursor-pointer' onClick={navigateToPayback}>
                        <div className='flex items-center justify-between w-full'>
                            <img src="/assets/Mascot.png" alt="Mascot" className='w-10 h-10 rounded-full bg-contain' />

                            <div className='ml-4 flex flex-col flex-1 gap-1'>
                                <span className='text-sm text-gray_400 f-pretendard-sm'>트레이더님 지금 확인해보세요</span>
                                <h3 className='text-[17px] text-gray_700 f-pretendard-b'>내가 받을 돈 확인하기</h3>
                            </div>
                        </div>
                        <img src="/assets/right-arrow.svg" alt="right-arrow" className='hidden md:block' />
                    </div>
                </div>
            </div>
            <Footer bgColor='bg-gray_50' />
        </main>
    )
}

export default Ko