"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageConvertor from './LanguageConvertor';
import MyProfilePopup from './MyProfilePopup';
import NotificationPopup from './NotificationPopup';
import Image from 'next/image';

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
        <header className='border-b border-gray_55 h-[52px] lg:h-[64px] sticky top-0 left-0 right-0 w-full bg-white z-50 flex items-center'>
            <div className='max-w-[840px] w-full mx-auto relative'>
                <div className='h-[52px] lg:h-[62px] flex flex-auto items-center px-5 justify-between'>
                    <Link href="/">
                        <Image src="/assets/tethermax_logo.webp" alt="tethermax_logo" width={162} height={21} />
                    </Link>

                    <nav className='hidden lg:flex items-center gap-6'>
                        <Link href="/affiliated" className={`${isActive('/affiliated')} text-base tracking-[-.32px] f-pretendard-sm`}>제휴 거래소</Link>
                        <Link href="/service-intro" className={`${isActive('/service-intro')} text-base tracking-[-.32px] f-pretendard-sm`}>서비스 소개</Link>
                        <Link href="/payback" className={`${isActive('/payback')} text-base tracking-[-.32px] f-pretendard-sm`}>페이백 테스트</Link>
                        {/* <Link href="/benefit" className={`${isActive('/benefit')} flex items-center text-base tracking-[-.32px] f-pretendard-sm`}>혜택 <Image src="/assets/lightening.webp" alt="lightening" className='mr-[2px]' width={21} height={21} /></Link> */}
                        {/* <Link href="/download" className={`${isActive('/download')} text-base tracking-[-.32px] f-pretendard-sm`}>앱 다운로드</Link> */}
                    </nav>


                    <div className='hidden lg:flex gap-3 items-center'>
                        <Link href="/login" className='bg-blue_50 hover:bg-blue_100 text-blue_700 flex items-center text-center h-[38px] px-3 gap-1 justify-center rounded-lg text-[15px] f-pretendard-r'>
                            <Image src="/assets/login.svg" alt="Login icon" width={18} height={18} />
                            <span>로그인</span>
                        </Link>

                        <Link href="/signup" className='bg-blue_700 hover:bg-blue_900 hover:text-gray_50 text-white flex items-center text-center h-[38px] px-3 gap-1 justify-center rounded-lg text-[15px] f-pretendard-r'>
                            <Image src="/assets/user-signup.svg" alt="User icon" width={18} height={18} />
                            <span>회원가입</span>
                        </Link>
                    </div>

                    {/* After Login Show MyProfilePopup and NotificationPopup  */}

                    {/* <div className='hidden lg:flex items-center gap-4'>
                        <button onClick={toggleProfilePopup} className='flex items-center gap-2'>
                            <Image src="/assets/SunGlasses.webp" alt="SunGlasses" className='rounded-full relative' width={28} height={28} />
                            <span className="text-gray_400 text-base f-pretendard-m tracking-[-.32px]">회원 번호: 10011630</span>
                        </button>
                        <MyProfilePopup isOpen={isProfilePopupOpen} onClose={closeProfilePopup} />
                        <button onClick={toggleNotificationPopup} className='flex items-center relative justify-center w-[34px] h-[34px] border border-gray_55 rounded-lg'>
                            <Image src="/assets/notification-icon.svg" alt="notification-icon" width={16} height={16} />
                            <NotificationPopup isOpen={isNotificationPopupOpen} onClose={closeNotificationePopup} />
                        </button>
                    </div> */}





                    {/* Toggle btn  */}
                    <div className='flex lg:hidden items-center gap-3'>
                        <button onClick={toggleNotificationPopup} className='flex items-center relative justify-center w-[34px] h-[34px] border border-gray_55 rounded-lg'>
                            <Image src="/assets/notification-icon.svg" alt="notification-icon" width={16} height={16} />
                            <NotificationPopup isOpen={isNotificationPopupOpen} onClose={closeNotificationePopup} />
                        </button>
                        <button onClick={toggleMobileNav} className='bg-white border border-gray_55 p-2 rounded-lg flex justify-center items-center'>
                            <Image src="/assets/toggle.svg" alt="toggle" width={16} height={16} />
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
                                    <Image src="/assets/close-toggle.svg" alt="close-toggle" width={13} height={13} />
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
                                <Image src="/assets/SunGlasses.webp" alt="SunGlasses" className='rounded-full' width={36} height={36} />

                                <div className='ml-3'>
                                    <span className="text-gray_900 text-[15px] f-pretendard-sm tracking-[-.3px]">suneeldevelope***@gmail.com</span>
                                    <div className='flex items-center'>
                                        <p className="text-gray_400 text-[13px] tracking-[-.26px] f-pretendard-m">유저코드: 10011630</p>
                                        <Image src="/assets/copy.svg" alt="copy" className='cursor-pointer' width={16} height={16} />
                                    </div>
                                </div>
                            </div> */}


                            {/* Nav Links  */}

                            <div className='mt-[38px] flex flex-col'>
                                <Link href="/" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <Image src="/assets/home.webp" alt="home icon" width={24} height={24} />
                                        홈
                                    </div>
                                    <Image src="/assets/right-arrow.svg" alt="right-arrow" width={14} height={14} />
                                </Link>

                                <Link href="/affiliated" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <Image src="/assets/exchange.webp" alt="exchange icon" width={24} height={24} />
                                        제휴 거래소
                                    </div>
                                    <Image src="/assets/right-arrow.svg" alt="right-arrow" width={14} height={14} />
                                </Link>

                                {/* After login Show benefit Link  */}

                                {/* <Link href="/benefit" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <Image src="/assets/_celebrate.webp" alt="celebrate" width={24} height={24} />
                                        혜택
                                    </div>
                                    <Image src="/assets/right-arrow.svg" alt="right-arrow" width={14} height={14} />
                                </Link> */}

                                {/* After login Show Mypage Link  */}

                                {/* <Link href="/mypage" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <Image src="/assets/_user.webp" alt="_user icon" width={24} height={24} />
                                        마이페이지
                                    </div>
                                    <Image src="/assets/right-arrow.svg" alt="right-arrow" width={14} height={14} />
                                </Link> */}

                                {/* After login Show Download Link  */}

                                {/* <Link href="/download" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <Image src="/assets/download.webp" alt="download icon" width={24} height={24} />
                                        앱 다운로드
                                    </div>
                                    <Image src="/assets/right-arrow.svg" alt="right-arrow" width={14} height={14} />
                                </Link> */}

                                <Link href="/service-intro" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <Image src="/assets/introduce.webp" alt="introduce icon" width={24} height={24} />
                                        서비스 소개
                                    </div>
                                    <Image src="/assets/right-arrow.svg" alt="right-arrow" width={14} height={14} />
                                </Link>

                                <Link href="/payback" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <Image src="/assets/payback.webp" alt="payback icon" width={24} height={24} />
                                        페이백 테스트
                                    </div>
                                    <Image src="/assets/right-arrow.svg" alt="right-arrow" width={14} height={14} />
                                </Link>

                                <Link href="" className='flex items-center justify-between py-3'>
                                    <div className='flex items-center gap-3 text-gray_700 f-pretendard-sm text-sm'>
                                        <Image src="/assets/language.webp" alt="language icon" width={24} height={24} />
                                        언어
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <span className='text-sm text-blue_700 f-pretendard-sm'>KO</span>
                                        <Image src="/assets/right-arrow.svg" alt="right-arrow" width={14} height={14} />
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
