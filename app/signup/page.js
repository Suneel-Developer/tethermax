"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import classNames from 'classnames'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [focusedField, setFocusedField] = useState(null)
    const [isTicked, setIsTicked] = useState(true)
    const [isInvitationVisible, setIsInvitationVisible] = useState(false)

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible)
    const toggleTick = () => setIsTicked(!isTicked)
    const toggleInvitationVisibility = () => setIsInvitationVisible(!isInvitationVisible)

    const isFormValid = email.length > 0 && password.length >= 6

    return (
        <section className='bg-gray_50'>
            <Header />

            <div className='max-w-[840px] w-full mx-auto bg-white pt-6 pb-4 px-6'>
                <form>
                    <div>
                        <img src="/assets/Bmeal.webp" alt="Bmeal" loading='lazy' className='w-[64px] h-[64px]' />

                        <div className='mt-7'>
                            <p className='text-gray_900 text-[22px] f-pretendard-b'>선물 거래 <strong className='text-blue_700'>수수료 페이백 테더맥스</strong>에 <br />오신 것을 환영합니다</p>
                            <p className='text-gray_400 text-[13px] f-pretendard-sm mt-3 leading-[20px]'>테더맥스는 거래소에서 발생한 수수료를 <br />트레이더님들께 <strong className='text-blue_700'>직접 환급</strong>해주는 페이백 서비스에요</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-11 mt-8 mb-[94px]'>
                        <div className='flex w-full'>
                            <label className='w-full flex flex-col'>
                                <div className={classNames('text-xs leading-[16px] f-pretendard-r', { 'text-blue_700': focusedField === 'email', 'text-[#121416]': focusedField !== 'email' })}>이메일</div>
                                <div className={classNames('flex flex-1 border-b w-full h-10 items-center', { 'border-blue_700': focusedField === 'email', 'border-gray_100': focusedField !== 'email' })}>
                                    <input
                                        type="email"
                                        id='email'
                                        value={email}
                                        onChange={handleEmailChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder='이메일을 입력해주세요'
                                        className='py-2 flex-1 text-[22px] f-pretendard-sm w-full h-full border-none outline-none'
                                    />
                                </div>
                            </label>
                        </div>

                        <div className='flex w-full'>
                            <label className='w-full flex flex-col'>
                                <div className={classNames('text-xs leading-[16px] f-pretendard-r', { 'text-blue_700': focusedField === 'password', 'text-[#121416]': focusedField !== 'password' })}>비밀번호</div>
                                <div className={classNames('flex gap-2 border-b w-full h-10 items-center', { 'border-blue_700': focusedField === 'password', 'border-gray_100': focusedField !== 'password' })}>
                                    <input
                                        type={isPasswordVisible ? 'text' : 'password'}
                                        id='password'
                                        value={password}
                                        onChange={handlePasswordChange}
                                        onFocus={() => setFocusedField('password')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder='비밀번호를 입력해주세요'
                                        className='py-2 flex-1 text-[22px] f-pretendard-sm w-full h-full border-none outline-none'
                                    />
                                    <div className='w-[18px] h-[18px] flex justify-center items-center'>
                                        <button type='button' onClick={togglePasswordVisibility}>
                                            {isPasswordVisible ? (
                                                <img src="/assets/eye.svg" alt="eye-off" className='w-6' />
                                            ) : (
                                                <img src="/assets/eye-off.svg" alt="eye" className='w-6' />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div>
                        <button type='button' onClick={toggleInvitationVisibility} className='flex items-center mb-2 text-gray_900 text-lg f-pretendard-sm'>
                            친구초대 코드 (선택)
                            <img
                                src="/assets/_down-arrow.svg"
                                alt="down-arrow"
                                className={classNames('w-7 h-7 transform transition-transform', {
                                    'rotate-180': isInvitationVisible
                                })}
                            />
                        </button>
                        {isInvitationVisible && (
                            <div className='max-h-[50px] mb-4 flex relative w-full justify-between items-center gap-2 py-2 border-b border-gray_100'>
                                <input type="text" placeholder='친구초대 코드를 입력해주세요' className='flex flex-1 border-none outline-none h-full w-full text-[22px] f-pretendard-sm' />
                                <button type='button' className='bg-blue_700 text-white flex justify-center items-center w-[100px] text-center h-11 rounded-xl text-[15px] f-pretendard-m mb-2'>확인</button>
                            </div>
                        )}
                        <div className='mt-12 py-4 px-[14px] flex items-center border border-gray_100 rounded-xl cursor-pointer'>
                            <button type='button' className='flex items-center' onClick={toggleTick}>
                                {isTicked ? (
                                    <img src="/assets/blue-tikmark.svg" alt="blue-tikmark" />
                                ) : (
                                    <img src="/assets/tikmark-box.svg" alt="tikmark-box" />
                                )}
                            </button>
                            <div className='ml-3 text-gray_900 text-[15px] f-pretendard-r'>저는 테더맥스의 <Link href="#" className='text-blue_700 underline'>이용약관</Link> 및 <Link href="#" className='text-blue_700 underline'>개인정보 보호 정책</Link>을 읽고 동의합니다.</div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center text-center mt-6 text-gray_500 text-[15px] f-pretendard-r'>
                        이미 계정이 있으신가요?
                        <Link href="/login" className='text-blue_700 underline ml-[3px]'> 로그인</Link>
                    </div>

                    <button type='submit' className={classNames('h-14 mt-7 flex justify-center items-center w-full text-lg rounded-xl text-white f-pretendard-sm', { 'bg-blue_700': isFormValid, 'bg-blue_200': !isFormValid })} disabled={!isFormValid}>가입하기</button>
                </form>
            </div>
            <Footer />
        </section>
    )
}

export default Signup
