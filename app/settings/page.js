"use client"
import { useState } from 'react';
import Header from '../components/Header';
import TermsModal from '../components/settings/TermsModal';
import PrivacyPolicyModal from '../components/settings/PrivacyPolicyModal';

const Settings = () => {
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
    const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] = useState(false);

    const openTermsModal = () => setIsTermsModalOpen(true);
    const closeTermsModal = () => setIsTermsModalOpen(false);

    const openPrivacyPolicyModal = () => setIsPrivacyPolicyModalOpen(true);
    const closePrivacyPolicyModal = () => setIsPrivacyPolicyModalOpen(false);

    return (
        <div className='bg-gray_50'>
            <Header />

            <section className="max-w-[840px] mx-auto w-full bg-white paybackheight pt-2">
                <div>
                    <button className='py-[14px] hover:bg-gray_50 w-full px-6 h-12 flex items-center justify-between'>
                        <span className="text-[17px] text-gray_900 f-pretendard-sm">알림설정</span>
                        <img src="/assets/right-arrow.svg" alt="right-arrow" />
                    </button>

                    <button
                        className='py-[14px] hover:bg-gray_50 w-full px-6 h-12 flex items-center justify-between'
                        onClick={openTermsModal}
                    >
                        <span className="text-[17px] text-gray_900 f-pretendard-sm">이용약관</span>
                        <img src="/assets/right-arrow.svg" alt="right-arrow" />
                    </button>

                    <button
                        className='py-[14px] hover:bg-gray_50 w-full px-6 h-12 flex items-center justify-between'
                        onClick={openPrivacyPolicyModal}
                    >
                        <span className="text-[17px] text-gray_900 f-pretendard-sm">개인정보 보호정책</span>
                        <img src="/assets/right-arrow.svg" alt="right-arrow" />
                    </button>

                    <button className='py-[14px] hover:bg-gray_50 w-full px-6 h-12 flex items-center justify-between'>
                        <span className="text-[17px] text-gray_900 f-pretendard-sm">회원탈퇴</span>
                        <img src="/assets/right-arrow.svg" alt="right-arrow" />
                    </button>
                </div>
            </section>

            <TermsModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
            <PrivacyPolicyModal isOpen={isPrivacyPolicyModalOpen} onClose={closePrivacyPolicyModal} />
        </div>
    );
};

export default Settings;
