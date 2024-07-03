"use client"
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Link from 'next/link';
import UploadImageModal from '../components/uploadImageModal';

const Mypage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/assets/SunGlasses.webp'); // Default image
    const codeRef = useRef(null);
    const router = useRouter();

    const handleCopy = () => {
        if (codeRef.current) {
            const codeText = codeRef.current.textContent;
            navigator.clipboard.writeText(codeText).then(() => {
                console.log('User code copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
    };

    const navigatetoCoupon = () => {
        router.push('/coupon');
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleImageSave = (image) => {
        setSelectedImage(image);
        closeModal();
    };

    return (
        <div className='bg-gray_50'>
            <Header />

            <section className="max-w-[840px] mx-auto w-full bg-white paybackheight">
                <div className='pt-8 px-5 md:px-6 flex gap-3'>
                    <button className='relative' onClick={openModal}>
                        <div className='w-12 h-12 rounded-full md:ml-4 object-cover overflow-hidden'>
                            <img src={selectedImage} alt="User Avatar" />
                        </div>
                        <div className='absolute w-6 h-6 bottom-0 p-[6px] rounded-full -right-1 bg-white border-2 border-gray_55 flex items-center justify-center'>
                            <img src="/assets/UploadImage.webp" alt="UploadImage" />
                        </div>
                    </button>

                    <div>
                        <p className='mb-1 text-gray_900 text-[17px] tracking-[-.34px] f-pretendard-b'>suneeldevelope***@gmail.com</p>
                        <button className='flex items-center'>
                            <p className="text-gray_500 text-[15px] tracking-[-.3px] f-pretendard-m">유저코드: <span ref={codeRef}>10011630</span></p>
                            <img src="/assets/copy.svg" alt="copy" onClick={handleCopy} className='cursor-pointer' />
                        </button>
                    </div>
                </div>

                <div className='mt-4 mx-4' onClick={navigatetoCoupon}>
                    <button className='w-full py-4 px-6 bg-white border border-blue_700 flex items-center justify-between overflow-hidden rounded-[20px]'>
                        <div className='flex items-center'>
                            <img src="/assets/svgexport.svg" alt="svgexport" />
                            <span className="text-[17px] text-gray_400 ml-[10px] mr-1 f-pretendard-sm">쿠폰</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="text-[17px] text-blue_700 ml-[10px] mr-1 f-pretendard-b">0</span>
                            <img src="/assets/right-arrow.svg" alt="right-arrow" />
                        </div>
                    </button>
                </div>

                <div className='mt-6'>
                    <Link href="#" className='py-[14px] hover:bg-gray_50 px-6 h-12 flex items-center justify-between'>
                        <span className="text-[17px] text-gray_900 f-pretendard-sm">비밀번호 변경</span>
                        <img src="/assets/right-arrow.svg" alt="right-arrow" />
                    </Link>
                    <Link href="/https://pf.kakao.com/_LxkPgb" className='py-[14px] hover:bg-gray_50 px-6 h-12 flex items-center justify-between'>
                        <span className="text-[17px] text-gray_900 f-pretendard-sm">고객센터 연결</span>
                        <img src="/assets/right-arrow.svg" alt="right-arrow" />
                    </Link>
                    <button className='py-[14px] hover:bg-gray_50 w-full px-6 h-12 flex items-center justify-between'>
                        <span className="text-[17px] text-gray_900 f-pretendard-sm">로그아웃</span>
                        <img src="/assets/right-arrow.svg" alt="right-arrow" />
                    </button>
                    <Link href="/settings" className='py-[14px] hover:bg-gray_50 px-6 h-12 flex items-center justify-between'>
                        <span className="text-[17px] text-gray_900 f-pretendard-sm">설정</span>
                        <img src="/assets/right-arrow.svg" alt="right-arrow" />
                    </Link>
                </div>
            </section>

            <UploadImageModal isOpen={isModalOpen} onClose={closeModal} onSave={handleImageSave} />
        </div>
    )
}

export default Mypage;
