import React from 'react'

const LanguageConvertor = () => {
    return (
        <div>
            <button className='flex items-center gap-[7px] uppercase text-[17px] text-center f-pretendard-sm'>
                <img src="/assets/globe.svg" alt="globe" />
                <span className='flex items-center gap-[2px]'>
                    Ko
                    <img src="/assets/down-arrow.svg" alt="down-arrow" />
                </span>
            </button>
        </div>
    )
}

export default LanguageConvertor