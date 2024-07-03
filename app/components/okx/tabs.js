"use client"

import React, { useState, useEffect } from 'react';
import PolicyStep from './policyStep';
import StatisticsStep from './statisticsStep';
import StepsStep from './stepsStep';
import EventStep from './eventStep';
import SignupLinkModal from './signuplinkmodal';
import ExistingUserModal from './exsitinguserModal';

const Tabs = () => {
    const [showSignupLinkModal, setShowSignupLinkModal] = useState(false);
    const [showExistingUserModal, setShowExistingUserModal] = useState(false);
    const [activeTab, setActiveTab] = useState('policy');

    const handleOpenSignupLinkModal = () => {
        setShowSignupLinkModal(true);
        setShowExistingUserModal(false);
    };

    const handleOpenExistingUserModal = () => {
        setShowExistingUserModal(true);
        setShowSignupLinkModal(false);
    };

    const handleCloseModals = () => {
        setShowSignupLinkModal(false);
        setShowExistingUserModal(false);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        document.getElementById(tab).scrollIntoView({ behavior: 'smooth' });
    };

    const handleScroll = () => {
        const policySection = document.getElementById('policy');
        const statisticsSection = document.getElementById('statistics');
        const stepsSection = document.getElementById('steps');
        const eventSection = document.getElementById('event');

        const scrollY = window.scrollY;

        if (eventSection.offsetTop <= scrollY + 100) {
            setActiveTab('event');
        } else if (stepsSection.offsetTop <= scrollY + 100) {
            setActiveTab('steps');
        } else if (statisticsSection.offsetTop <= scrollY + 100) {
            setActiveTab('statistics');
        } else {
            setActiveTab('policy');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section>
            {/* Tabs */}
            <div className='flex items-center justify-center h-[52px] bg-white w-[calc(100% - 24px)] sticky top-[60px] z-20'>
                <div
                    onClick={() => handleTabClick('policy')}
                    className={`flex cursor-pointer justify-center items-center flex-1 text-center text-[19px] f-pretendard-b ${activeTab === 'policy' ? 'text-gray_900 border-gray_900 border-b-2' : 'text-gray_400 border-gray_55 border-b'} h-[52px]`}
                >
                    정책
                </div>
                <div
                    onClick={() => handleTabClick('statistics')}
                    className={`flex cursor-pointer justify-center items-center flex-1 text-center text-[19px] f-pretendard-b ${activeTab === 'statistics' ? 'text-gray_900 border-gray_900 border-b-2' : 'text-gray_400 border-gray_55 border-b'} h-[52px]`}
                >
                    통계
                </div>
                <div
                    onClick={() => handleTabClick('steps')}
                    className={`flex cursor-pointer justify-center items-center flex-1 text-center text-[19px] f-pretendard-b ${activeTab === 'steps' ? 'text-gray_900 border-gray_900 border-b-2' : 'text-gray_400 border-gray_55 border-b'} h-[52px]`}
                >
                    방법
                </div>
                <div
                    onClick={() => handleTabClick('event')}
                    className={`flex cursor-pointer justify-center items-center flex-1 text-center text-[19px] f-pretendard-b ${activeTab === 'event' ? 'text-gray_900 border-gray_900 border-b-2' : 'text-gray_400 border-gray_55 border-b'} h-[52px]`}
                >
                    이벤트
                </div>
            </div>

            {/* Tabs Section */}
            <div className='bg-white pt-10'>
                <div id="policy"><PolicyStep /></div>
                <div id="statistics"><StatisticsStep /></div>
                <div id="steps"><StepsStep /></div>
                <div id="event"><EventStep /></div>

                <div className='exchangebtnContainer py-[14px] px-5 max-w-[840px] mx-auto min-h-[110px] z-30 fixed bottom-0 w-full'>
                    <p className='mb-2 text-gray_400 text-center text-[13px] f-pretendard-m'>이미 OKX 계정이 있으신가요?</p>
                    <div className='flex gap-[9px]'>
                        <button onClick={handleOpenExistingUserModal} className='bg-gray_55 rounded-xl py-[19px] min-h-14 flex-1 text-center text-blue_700 text-[15px] f-pretendard-b'>네, 기존 회원이에요</button>
                        <button onClick={handleOpenSignupLinkModal} className='bg-blue_700 rounded-xl py-[19px] min-h-14 flex-1 text-center text-white text-[15px] f-pretendard-b'>아니요</button>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {showSignupLinkModal && (
                <SignupLinkModal onClose={handleCloseModals} />
            )}

            {showExistingUserModal && (
                <ExistingUserModal onClose={handleCloseModals} />
            )}
        </section>
    );
};

export default Tabs;
