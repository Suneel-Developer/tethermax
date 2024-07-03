"use client"
import React, { useState } from 'react';

const NestedUid = ({ uid, onGoBack }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="flex flex-col paybackheight pt-8 bg-white max-w-[840px] mx-auto w-full relative">
            <form className="flex flex-col gap-4">
                <div>
                    <img src={uid.img} alt={uid.name} className='ml-6 mr-4 rounded-full w-10 h-10' />
                    <p className="text-2xl text-gray_900 px-6 mt-4 leading-[150%] f-pretendard-b">{uid.name} UID를 알려주세요</p>

                    <div className='py-11 px-6'>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="UID 입력"
                            className="w-full border-b py-2 border-gray_100 outline-none h-10 bg-white text-gray_900 text-[22px] f-pretendard-sm"
                        />
                    </div>
                </div>

                <div className='absolute bottom-0 w-full'>
                    <div className='h-[88px] flex items-center justify-center py-4 px-6'>
                        <button
                            className={`px-2 text-white w-full h-14 text-center text-lg rounded-xl f-pretendard-b ${inputValue.length === 6 ? 'bg-blue_700' : 'bg-blue_200'}`}
                        >
                            다음
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NestedUid;
