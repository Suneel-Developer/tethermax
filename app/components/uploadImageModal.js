import React, { useState } from 'react';

const UploadImageModal = ({ isOpen, onClose, onSave }) => {
    const [selectedImage, setSelectedImage] = useState('/assets/SunGlasses.webp');
    const [fileName, setFileName] = useState('');

    if (!isOpen) return null;

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleAvatarClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setFileName(''); // Reset the file name when an avatar is selected
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                setFileName(file.name); // Set the file name when a file is selected
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        onSave(selectedImage);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-25 z-30" onClick={handleOutsideClick}>
            <div className="bg-white rounded-t-3xl max-w-[500px] pt-8 px-6 pb-6 w-full" onClick={(e) => e.stopPropagation()}>
                <form className='flex flex-col gap-2'>
                    <div className='flex items-center justify-center'>
                        <img src={selectedImage} alt="Selected" className='w-[106px] h-[106px] rounded-full object-cover' />
                    </div>

                    <div className='px-2 md:px-[60px] mt-4 mb-6 flex flex-wrap gap-4 items-center justify-center'>
                        <button type="button" onClick={() => handleAvatarClick('/assets/SunGlasses.webp')}><img src="/assets/SunGlasses.webp" alt="SunGlasses" className='rounded-full w-[52px] h-[52px]' /></button>
                        <button type="button" onClick={() => handleAvatarClick('/assets/Smile.webp')}><img src="/assets/Smile.webp" alt="Smile" className='rounded-full w-[52px] h-[52px]' /></button>
                        <button type="button" onClick={() => handleAvatarClick('/assets/Ghost.webp')}><img src="/assets/Ghost.webp" alt="Ghost" className='rounded-full w-[52px] h-[52px]' /></button>
                        <button type="button" onClick={() => handleAvatarClick('/assets/Poop.webp')}><img src="/assets/Poop.webp" alt="Poop" className='rounded-full w-[52px] h-[52px]' /></button>
                        <button type="button" onClick={() => handleAvatarClick('/assets/Devil.webp')}><img src="/assets/Devil.webp" alt="Devil" className='rounded-full w-[52px] h-[52px]' /></button>
                        <button type="button" onClick={() => handleAvatarClick('/assets/HiBit.webp')}><img src="/assets/HiBit.webp" alt="HiBit" className='rounded-full w-[52px] h-[52px]' /></button>
                        <button type="button" onClick={() => handleAvatarClick('/assets/HiEth.webp')}><img src="/assets/HiEth.webp" alt="HiEth" className='rounded-full w-[52px] h-[52px]' /></button>
                        <button type="button" onClick={() => handleAvatarClick('/assets/GameGhost.webp')}><img src="/assets/GameGhost.webp" alt="GameGhost" className='rounded-full w-[52px] h-[52px]' /></button>
                        <button type="button" onClick={() => handleAvatarClick('/assets/Tiger.webp')}><img src="/assets/Tiger.webp" alt="Tiger" className='rounded-full w-[52px] h-[52px]' /></button>
                        <button type="button" onClick={() => handleAvatarClick('/assets/Rabbit.webp')}><img src="/assets/Rabbit.webp" alt="Rabbit" className='rounded-full w-[52px] h-[52px]' /></button>
                    </div>

                    <div className='text-gray_900 text-xl f-pretendard-b'>사진</div>

                    <label className='mt-4 flex relative overflow-hidden cursor-pointer p-4 rounded-lg border border-gray_100 w-full'>
                        <input type="file" className='absolute top-0 left-0 w-full h-full right-0 bottom-0 opacity-0 cursor-pointer' onChange={handleFileChange} />
                        <span className={`text-[15px] flex-1 f-pretendard-m ${fileName ? 'text-black' : 'text-gray-200'}`}>
                            {fileName || '프로필로 사용할 사진을 첨부해주세요'}
                        </span>
                        <img src="/assets/file.svg" alt="file" />
                    </label>

                    <button type="button" onClick={handleSave} className='mt-5 bg-blue_700 text-white text-center rounded-xl h-14 flex items-center justify-center f-pretendard-b text-lg'>저장</button>
                </form>
            </div>
        </div>
    );
};

export default UploadImageModal;
