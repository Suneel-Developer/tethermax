import Image from 'next/image'
import React from 'react'

const LanguageConvertor = () => {
    return (
        <div>
            <button className='flex items-center gap-[7px] uppercase text-[17px] text-center f-pretendard-sm'>
                <Image src="/assets/globe.svg" alt="globe" width={24} height={24} />
                <span className='flex items-center gap-[2px]'>
                    Ko
                    <Image src="/assets/down-arrow.svg" alt="down-arrow" width={18} height={18} />
                </span>
            </button>
        </div>
    )
}

export default LanguageConvertor