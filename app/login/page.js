"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import classNames from 'classnames'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [focusedField, setFocusedField] = useState(null)

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible)

    const isFormValid = email.length > 0 && password.length >= 6

    return (
        <section className='bg-gray_50'>
            <Header />

            <div className='max-w-[840px] w-full mx-auto bg-white pt-6 pb-4 px-6'>
                <form>
                    <div>
                        <p className='text-gray_900 text-[22px] f-pretendard-b'>로그인</p>

                        <div className='mt-3'>
                            <p className='text-gray_400 text-[13px] f-pretendard-sm'>주요 거래소와 <strong className='text-blue_700'>공식 계약을 체결</strong>한 곳은 오직 테더맥스 뿐이에요.</p>
                            <p className='text-gray_400 text-[13px] f-pretendard-sm'>회원이라면 누구나 다양한 미션을 수행하고 USDT를 받아보세요.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-11 mt-8 mb-2'>
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

                    <div className='flex justify-end gap-1'>
                        <button type='button' className='flex items-center text-blue_700 text-[15px] f-pretendard-m'>비밀번호를 몰라요 <img src="/assets/right-arrow-blue.svg" alt="right-arrow-blue" /></button>
                    </div>

                    <div className='flex items-center justify-center text-center mt-6 text-gray_500 text-[15px] f-pretendard-r'>
                        아직 계정이 없으신가요?
                        <Link href="/signup" className='text-blue_700 underline ml-[3px]'> 가입하기</Link>
                    </div>

                    <button type='submit' className={classNames('h-14 mt-7 flex justify-center items-center w-full text-lg rounded-xl text-white f-pretendard-sm', { 'bg-blue_700': isFormValid, 'bg-blue_200': !isFormValid })} disabled={!isFormValid}>로그인</button>
                </form>
            </div>
            <Footer />
        </section>
    )
}

export default Login
