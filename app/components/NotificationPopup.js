"use client"
import React, { useEffect, useRef, useCallback } from 'react';

const NotificationPopup = ({ isOpen, onClose }) => {
    const popupRef = useRef(null);

    // Handle click outside popup to close it
    const handleClickOutside = useCallback((event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            onClose();
        }
    }, [onClose]);

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
    }, [isOpen, handleClickOutside]);

    return (
        <div className={`absolute top-10 lg:top-[40px] -right-14 md:right-20 mx-auto ${isOpen ? '' : 'hidden'}`}>
            <div ref={popupRef} className='border border-gray_100 bg-white min-w-[310px] md:min-w-[345px] relative w-fit rounded-2xl pt-6 px-4 pb-4'>
                <div className="text-gray_900 text-2xl text-left f-pretendard-b tracking-[-.3px]">알림</div>

                <div className='pt-[14px] flex flex-col gap-3'>
                    <div className='flex items-center justify-between'>
                        <h4 className='text-gray_400 text-sm f-pretendard-r relative overflow-hidden text-ellipsis'>UID Binding Failed</h4>
                        <h4 className='text-gray_300 text-sm f-pretendard-r relative overflow-hidden text-ellipsis'>2024-07-03 01:40:04</h4>
                    </div>
                    <span className='text-gray_700 relative overflow-hidden f-pretendard-b text-left text-ellipsis text-base'>Bitget UID 33**** binding failed.</span>
                </div>
            </div>
        </div>
    )
}

export default NotificationPopup;
