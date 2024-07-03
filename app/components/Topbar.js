"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import LanguageConvertor from './LanguageConvertor'

const Topbar = () => {
    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    return (
        <header className='border-b border-gray_55 h-[52px] lg:h-[64px] sticky top-0 left-0 right-0 w-full bg-white z-30 flex items-center'>
            <div className='max-w-[840px] w-full mx-auto relative'>
                <div className='h-[52px] lg:h-[62px] flex flex-auto items-center px-5 justify-between'>
                    <button type='button' onClick={handleBack}>
                        <img src="/assets/_left-arrow.svg" alt="tethermax_logo" />
                    </button>
                </div>
            </div>

            {/* Language selection button */}

            <div className='hidden lg:flex items-center gap-[7px] absolute transform -translate-y-1/2 right-5 top-[50%] uppercase text-[17px] text-center f-pretendard-sm'>
                <LanguageConvertor />
            </div>
        </header>
    )
}

export default Topbar
