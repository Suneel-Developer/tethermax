import Header from '../components/Header'
import Topbar from '../components/Topbar'

const Uid = () => {

    return (
        <>
            <section>
                <div className='hidden md:block'><Header /></div>
                <div className='block md:hidden'><Topbar /></div>
            </section>
            <section>
                <div className='max-w-[840px] mx-auto w-full flex flex-col gap-9 pt-14 pb-8'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-gray_900 text-[28px] f-pretendard-b leading-[150%] break-keep text-center mb-4'>페이백의 첫걸음 <br /> <strong className="text-blue_700">UID 등록하기</strong></h2>

                        <div className='flex flex-col gap-2 my-8'>
                            <div className='flex items-center justify-center gap-2'>
                                <img src="/assets/_warning.svg" alt="_warning" />
                                <h4 className='text-gray_900 text-[15px] f-pretendard-b text-center'>페이백을 받으려면 꼭 필요해요! </h4>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <img src="/assets/dollar.svg" alt="dollar" className='w-6 h-6' />
                                <h4 className='text-gray_900 text-[15px] f-pretendard-b text-center'>UID 등록하고 받는 <strong className="text-blue_700">10 USDT</strong> 쿠폰</h4>
                            </div>

                        </div>
                        <img src="/assets/uid.svg" alt="uid" className='h-[240px] w-[240px] mx-auto' />
                    </div>
                </div>

                <div className='bg-blue_50'>
                    <div className='pt-12 px-6 max-w-[840px] mx-auto w-full flex justify-center flex-col items-center'>
                        <h2 className='text-gray_900 mb-6 text-2xl text-center f-pretendard-b leading-[34px]'>테더맥스 레퍼럴 코드로 <br />거래소 가입하고</h2>
                        <img src="/assets/connection_step_1.webp" alt="connection_step_1" className='w-[164px] h-[176px]' />
                    </div>
                </div>

                <div className='bg-white'>
                    <div className='pt-12 px-6 max-w-[840px] mx-auto w-full flex justify-center flex-col items-center'>
                        <h2 className='text-gray_900 text-2xl text-center f-pretendard-b leading-[34px]'>UID 등록하면</h2>
                        <h2 className='text-gray_400 mb-6 mt-2 text-[17px] text-center f-pretendard-sm leading-[26px]'>이제 내가 쌓은 페이백을 확인 할 수 있어요</h2>
                        <img src="/assets/connection_step_2.webp" alt="connection_step_2" className='w-[164px] h-[176px]' />
                    </div>
                </div>

                <div className='bg-gray_50'>
                    <div className='pt-8 pb-14 px-6 max-w-[840px] mx-auto w-full flex justify-center flex-col items-center'>
                        <img src="/assets/dollar.svg" alt="dollar" />
                        <h4 className='text-gray_900 text-2xl text-center f-pretendard-b leading-[34px] mt-3'><strong className="text-blue_700">10 USDT</strong> <br />쿠폰을 받아요!</h4>
                        <h3 className='text-gray_400 mt-2 text-[17px] text-center f-pretendard-sm leading-[26px]'>출금이 가능한 USDT 쿠폰이에요</h3>

                        <button className='bg-blue_700 flex-1 text-center text-lg mt-6 py-[14px] f-pretendard-b h-12 rounded-xl px-3 text-white'>UID 등록하고 10 USDT 받기</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Uid