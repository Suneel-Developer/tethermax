"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const MyProfilePopup = ({ isOpen, onClose }) => {
    const popupRef = useRef(null);

    // Handle click outside popup to close it
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            // Add event listener when popup is open
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            // Clean up event listener when popup is closed
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);


    return (
        <div className={`absolute top-[60px] left-1/2 right-1/2 mx-auto ${isOpen ? '' : 'hidden'}`}>
            <div ref={popupRef} className='border border-gray_100 bg-white min-w-[345px] relative w-fit rounded-2xl p-[10px] mypagepopupafter'>
                <div className='flex items-center'>
                    <Image src="/assets/SunGlasses.webp" alt="SunGlasses" className='rounded-full' width={36} height={36} />

                    <div className='ml-3'>
                        <span className="text-gray_900 text-[15px] f-pretendard-sm tracking-[-.3px]">suneeldevelope***@gmail.com</span>
                        <div className='flex items-center'>
                            <p className="text-gray_400 text-[13px] tracking-[-.26px] f-pretendard-m">유저코드: 10011630</p>
                            <Image src="/assets/copy.svg" alt="copy" className='cursor-pointer' width={16} height={16} />
                        </div>
                    </div>
                </div>

                <Link href="/mypage" className='mt-[17px] py-[17px] px-5 rounded-xl border border-blue_700 bg-white flex items-center flex-1 w-full justify-between h-14 f-pretendard-b text-[17px]'>
                    <div className='flex items-center text-blue_700 gap-2'>
                        <Image src="/assets/user.svg" alt="user" width={18} height={18} />
                        <span>마이페이지</span>
                    </div>

                    <Image src="/assets/right-arrow-blue.svg" alt="right-arrow-blue" width={14} height={14} />
                </Link>
            </div>
        </div>
    )
}

export default MyProfilePopup




