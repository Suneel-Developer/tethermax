import React from 'react'

const Footer = ({ bgColor = 'bg-gray_50' }) => {
  return (
    <footer className={bgColor}>
      <div className='bg-gray_55 py-8 px-6 max-w-[840px] w-full mx-auto'>
        <div className='max-w-[796px] mx-auto w-full'>
          <h4 className='text-[15px] text-[#0067ff] f-pretendard-b'>TETHERMAX PTE. LTD</h4>
          <ul className='pt-3 pb-5 flex flex-col text-gray_300 text-[13px] f-pretendard-sm'>
            <li>고유 법인 번호(UEN) : 202326628N</li>
            <li>소재지 : 531A UPPER CROSS STREET #04-98 HONG LIM COMPLEX SINGAPORE (051531)</li>
            <li>상담 : <a href="https://pf.kakao.com/_LxkPgb" className='text-gray_400 underline'>채팅 상담 (00:00 - 24:00)</a></li>
            <li>이메일 : support@tethermax.io</li>
            <li className='mt-5'>copyright © 2022 | tetherMax | All Right Reserved</li>
            <li className='text-gray_400'><button>이용 약관</button> | <button>개인정보처리방침</button></li>
          </ul>

          {/* Social Contacts  */}
          <ul className='flex items-center gap-4'>
            <li>
              <a href="https://www.instagram.com/tethermax_official/" className='w-8 h-8 flex justify-center items-center bg-white rounded-full'>
                <img src="/assets/instagram.svg" alt="instagram" className='w-6 h-6' />
              </a>
            </li>

            <li>
              <a href="https://tethermax.tistory.com/" className='w-8 h-8 flex justify-center items-center bg-white rounded-full'>
                <img src="/assets/tistory.svg" alt="tistory" className='w-6 h-6' />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/@tethermax" className='w-8 h-8 flex justify-center items-center bg-white rounded-full'>
                <img src="/assets/youtube.svg" alt="youtube" className='w-6 h-6' />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/tethermax" className='w-8 h-8 flex justify-center items-center bg-white rounded-full'>
                <img src="/assets/x.svg" alt="x" className='w-6 h-6' />
              </a>
            </li>

            <li>
              <a href="https://t.me/tethermax_official" className='w-8 h-8 flex justify-center items-center bg-white rounded-full'>
                <img src="/assets/telegram.svg" alt="telegram" className='w-6 h-6' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
