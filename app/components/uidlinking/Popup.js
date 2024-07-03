import React from 'react';

const Popup = ({ uid, onGoBack, onNestedButtonClick }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center w-[100vw] h-[100vh] bg-gray-800 px-6 bg-opacity-25 z-40">
            <div className="bg-white min-h-[180px] w-[500px] p-8 rounded-[24px] pt-8 px-8">

                <div className='flex flex-col gap-3 whitespace-pre'>
                    <h2 className='text-[#121416] text-xl f-pretendard-b leading-[20px]'><strong>{uid.name}</strong> 거래소부터 연동할까요?</h2>

                    <div className='pb-8 text-gray_400 text-base f-pretendard-m'>
                        10초면 충분해요
                    </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-4">
                    <button
                        className="bg-gray_55 rounded-xl text-gray_700 px-4 py-2 f-pretendard-b h-14 flex-1 text-lg "
                        onClick={onGoBack}
                    >
                        다음에요
                    </button>
                    <button
                        className="bg-blue_700 rounded-xl text-white px-4 py-2 f-pretendard-b h-14 flex-1 text-lg "
                        onClick={onNestedButtonClick}
                    >
                        네
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
