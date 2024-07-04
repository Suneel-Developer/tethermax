import Image from 'next/image';
import React from 'react';

const SignupLinkModal = ({ onClose }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className='bg-black bg-opacity-25 fixed top-0 left-0 w-full bottom-0 h-screen flex justify-center items-center z-50'
            onClick={handleOverlayClick}
        >
            <div className='max-w-[500px] w-full relative min-h-[180px] bg-white pt-8 px-8 mx-5 pb-4 rounded-3xl flex flex-col gap-3'>
                <div className='text-gray_900 text-xl f-pretendard-b'>
                BitVenus 거래소부터 가입 할까요?
                </div>
                <p className='text-gray_400 text-base f-pretendard-m'>테더맥스 추천인은 필수에요</p>
                <button className='bg-blue_700 rounded-xl px-3 flex-1 mt-9 mb-4 py-3 text-lg f-pretendard-b text-center text-white'>BitVenus 전용 링크로 가입하기</button>
                <button onClick={onClose} className='absolute top-6 right-6'>
                    <Image src="/assets/close-icon.svg" alt="close-icon" width={20} height={20} />
                </button>
            </div>
        </div>
    );
};

export default SignupLinkModal;
