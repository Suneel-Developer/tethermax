"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageConvertor from './LanguageConvertor';
import MyProfilePopup from './MyProfilePopup';
import NotificationPopup from './NotificationPopup';

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false); // State for mobile navigation visibility
    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false); // State for popup visibility
    const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false); // State for popup visibility
    const currentPath = usePathname();

    const isActive = (path) => currentPath === path ? 'text-blue_700 f-pretendard-b' : 'text-gray_500';

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const toggleProfilePopup = () => {
        setIsProfilePopupOpen(!isProfilePopupOpen);
    };

    const closeProfilePopup = () => {
        setIsProfilePopupOpen(false);
    };
    const toggleNotificationPopup = () => {
        setIsNotificationPopupOpen(!isNotificationPopupOpen);
    };

    const closeNotificationePopup = () => {
        setIsNotificationPopupOpen(false);
    };

    return (
        <header className='border-b border-gray_55 h-[52px] lg:h-[64px] sticky top-0 left-0 right-0 w-full bg-white z-30 flex items-center'>
            <div className='max-w-[840px] w-full mx-auto relative'>
                <div className='h-[52px] lg:h-[62px] flex flex-auto items-center px-5 justify-between'>
                    <Link href="/">
                        <img src="/assets/tethermax_logo.webp" alt="tethermax_logo" className='w-[149px] md:w-[162px] h-5 md:h-[21px]' />
                    </Link>

                    <nav className='hidden lg:flex items-center gap-6'>
                        <Link href="/affiliated" className={`${isActive('/affiliated')} text-base tracking-[-.32px] f-pretendard-sm`}>제휴 거래소</Link>
                        <Link href="/service-intro" className={`${isActive('/service-intro')} text-base tracking-[-.32px] f-pretendard-sm`}>서비스 소개</Link>
                        <Link href="/payback" className={`${isActive('/payback')} text-base tracking-[-.32px] f-pretendard-sm`}>페이백 테스트</Link>
                        {/* <Link href="/benefit" className={`${isActive('/benefit')} flex items-center text-base tracking-[-.32px] f-pretendard-sm`}>혜택 <img src="/assets/lightening.webp" alt="lightening" className='w-[21px] h-[21px] mr-[2px]' /></Link> */}
                        {/* <Link href="/download" className={`${isActive('/download')} text-base tracking-[-.32px] f-pretendard-sm`}>앱 다운로드</Link> */}
                    </nav>


                    <div className='hidden lg:flex gap-3 items-center'>
                        <Link href="/login" className='bg-blue_50 hover:bg-blue_100 text-blue_700 flex items-center text-center h-[38px] px-3 gap-1 justify-center rounded-lg text-[15px] f-pretendard-r'>
                            <img src="/assets/login.svg" alt="Login icon" className='w-[18px] h-[18px]' />
                            <span>로그인</span>
                        </Link>

                        <Link href="/signup" className='bg-blue_700 hover:bg-blue_900 hover:text-gray_50 text-white flex items-center text-center h-[38px] px-3 gap-1 justify-center rounded-lg text-[15px] f-pretendard-r'>
                            <img src="/assets/user-signup.svg" alt="User icon" className='w-[18px] h-[18px]' />
                            <span>회원가입</span>
                        </Link>
                    </div>

                    {/* After Login Show MyProfilePopup and NotificationPopup  */}

                    {/* <div className='hidden lg:flex items-center gap-4'>
                        <button onClick={toggleProfilePopup} className='flex items-center gap-2'>
                            <img src="/assets/SunGlasses.webp" alt="SunGlasses" className='w-7 h-7 rounded-full relative' />
                            <span className="text-gray_400 text-base f-pretendard-m tracking-[-.32px]">회원 번호: 10011630</span>
                        </button>
                        <MyProfilePopup isOpen={isProfilePopupOpen} onClose={closeProfilePopup} />
                        <button onClick={toggleNotificationPopup} className='flex items-center relative justify-center w-[34px] h-[34px] border border-gray_55 rounded-lg'>
                            <img src="/assets/notification-icon.svg" alt="notification-icon" className='w-4 h-4' />
                            <NotificationPopup isOpen={isNotificationPopupOpen} onClose={closeNotificationePopup} />
                        </button>
                    </div> */}





                    {/* Toggle btn  */}
                    <div className='flex items-center gap-3'>
                        <button onClick={toggleNotificationPopup} className='flex lg:hidden items-center relative justify-center w-[34px] h-[34px] border border-gray_55 rounded-lg'>
                            <img src="/assets/notification-icon.svg" alt="notification-icon" className='w-4 h-4' />
                            <NotificationPopup isOpen={isNotificationPopupOpen} onClose={closeNotificationePopup} />
                        </button>
                        <button onClick={toggleMobileNav} className='bg-white border border-gray_55 p-2 rounded-lg flex lg:hidden justify-center items-center'>
                            <img src="/assets/toggle.svg" alt="toggle" />
                        </button>
                    </div>
                </div>

            </div>

            {/* Language selection button */}

            <div className='hidden lg:flex items-center gap-[7px] absolute transform -translate-y-1/2 right-5 top-[50%] uppercase text-[17px] text-center f-pretendard-sm'>
                <LanguageConvertor />
            </div>


            {/* Mobile navigation links  */}
            {
                isMobileNavOpen && (
                    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-full flex lg:hidden justify-end bg-black bg-opacity-25'>
                        <div className={`fixed top-0 bottom-0 right-0 w-80 h-screen bg-white shadow-lg p-3 transform transition-transform rounded-tl-[32px] rounded-bl-[32px] duration-300 ease-in-out ${isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                            {/* Close btn  */}
                            <div className='flex w-full justify-end'>
                                <button className='bg-white border border-gray_55 p-2 rounded-lg flex justify-center items-center' onClick={toggleMobileNav}>
                                    <img src="/assets/close-toggle.svg" alt="close-toggle" />
                                </button>
                            </div>

                            {/* Auth btn  */}
                            <div className='flex flex-col gap-2 mt-4 text-sm'>
                                <Link href="/login" className='border border-blue_700 text-blue_700 flex items-center text-center h-10 px-3 justify-center rounded-xl text-[15px] f-pretendard-r'>
                                    <span>로그인</span>
                                </Link>

                                <Link href="/signup" className='bg-blue_700 text-white flex items-center text-center h-10 px-3 gap-1 justify-center rounded-xl text-[15px] f-pretendard-r'>
                                    <img src="/assets/user-signup.svg" alt="User icon" className='w-[18px] h-[18px]' />
                                    <span>회원가입</span>
                                </Link>
                            </div>


                            {/* After login show pyapge data  */}
                            {/* <div className='flex items-center'>
                                <img src="/assets/SunGlasses.webp" alt="SunGlasses" className='w-9 h-9 rounded-full' />

                                <div className='ml-3'>
                                    <span className="text-gray_900 text-[15px] f-pretendard-sm tracking-[-.3px]">suneeldevelope***@gmail.com</span>
                                    <div className='flex items-center'>
                                        <p className="text-gray_400 text-[13px] tracking-[-.26px] f-pretendard-m">유저코드: 10011630</p>
                                        <img src="/assets/copy.svg" alt="copy" className='cursor-pointer w-4 h-4' />
                                    </div>
                                </div>
                            </div> */}


                            {/* Nav Links  */}

                            <div className='mt-[38px] flex flex-col'>
                                <Link href="/" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <img src="/assets/home.webp" alt="home icon" className='w-6 h-6' />
                                        홈
                                    </div>
                                    <img src="/assets/right-arrow.svg" alt="right-arrow" />
                                </Link>

                                <Link href="/affiliated" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <img src="/assets/exchange.webp" alt="exchange icon" className='w-6 h-6' />
                                        제휴 거래소
                                    </div>
                                    <img src="/assets/right-arrow.svg" alt="right-arrow" />
                                </Link>

                                {/* After login Show benefit Link  */}

                                {/* <Link href="/benefit" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <img src="/assets/_celebrate.webp" alt="celebrate" className='w-6 h-6' />
                                        혜택
                                    </div>
                                    <img src="/assets/right-arrow.svg" alt="right-arrow" />
                                </Link> */}

                                {/* After login Show Mypage Link  */}

                                {/* <Link href="/mypage" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <img src="/assets/_user.webp" alt="_user icon" className='w-6 h-6' />
                                        마이페이지
                                    </div>
                                    <img src="/assets/right-arrow.svg" alt="right-arrow" />
                                </Link> */}

                                {/* After login Show Download Link  */}

                                {/* <Link href="/download" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <img src="/assets/download.webp" alt="download icon" className='w-6 h-6' />
                                        앱 다운로드
                                    </div>
                                    <img src="/assets/right-arrow.svg" alt="right-arrow" />
                                </Link> */}

                                <Link href="/service-intro" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <img src="/assets/introduce.webp" alt="introduce icon" className='w-6 h-6' />
                                        서비스 소개
                                    </div>
                                    <img src="/assets/right-arrow.svg" alt="right-arrow" />
                                </Link>

                                <Link href="/payback" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <img src="/assets/payback.webp" alt="payback icon" className='w-6 h-6' />
                                        페이백 테스트
                                    </div>
                                    <img src="/assets/right-arrow.svg" alt="right-arrow" />
                                </Link>

                                <Link href="" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <img src="/assets/language.webp" alt="language icon" className='w-6 h-6' />
                                        언어
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-sm text-blue_700 f-pretendard-sm'>KO</span>
                                        <img src="/assets/right-arrow.svg" alt="right-arrow" />
                                    </div>
                                </Link>

                            </div>


                        </div>
                    </div>

                )
            }

        </header >
    );
}

export default Header;
