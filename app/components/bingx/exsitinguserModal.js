import React from 'react';

const ExistingUserModal = ({ onClose }) => {
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
                    이미 BingX 회원이어도 <br /> 쉽게 페이백 가능해요
                </div>
                <div className='flex gap-3 items-center mt-6'>
                    <button className='bg-gray_55 rounded-xl py-3 px-4 flex-1'>
                        <p className='text-gray_400 text-[13px] f-pretendard-sm text-left'>평균 소요시간 250초</p>
                        <p className='text-gray_900 text-[15px] f-pretendard-b text-left'>동영상 보면서 따라하기</p>
                        <div className='flex justify-end mt-1'>
                            <img src="/assets/youtube-icon.svg" alt="/youtube-icon" className='w-8 h-8' />
                        </div>
                    </button>
                    <button className='bg-gray_55 rounded-xl py-3 px-4 flex-1'>
                        <p className='text-gray_400 text-[13px] f-pretendard-sm text-left'>평균 소요시간 100초</p>
                        <p className='text-gray_900 text-[15px] f-pretendard-b text-left'>글 보면서 따라하기</p>
                        <div className='flex justify-end mt-1'>
                            <img src="/assets/blog.webp" alt="blog-icon" className='w-8 h-8' />
                        </div>
                    </button>
                </div>
                <div className='pt-5 pb-2 flex items-center gap-1'>
                    <img src="/assets/headphone.svg" alt="headphone" />
                    <span className='text-gray_400 text-[15px] f-pretendard-m'>고객센터</span>
                </div>
                <button onClick={onClose} className='absolute top-6 right-6'>
                    <img src="/assets/close-icon.svg" alt="close-icon" />
                </button>
            </div>
        </div>
    );
};

export default ExistingUserModal;

