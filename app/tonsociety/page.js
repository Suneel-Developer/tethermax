"use client"
import React, { useState } from 'react'
import classNames from 'classnames';
import Header from '../components/Header';
import Topbar from '../components/Topbar';

const Tonsociety = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [uid, setUid] = useState('');

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
      <section>
        <div className='hidden md:block'><Header /></div>
        <div className='block md:hidden'><Topbar /></div>
      </section>
      <section className="w-full bg-gray_50">
        <div className='max-w-[840px] mx-auto w-full'>
          <div className='bg-white'>
            <img src="/assets/ton_banner.webp" alt="ton_banner" />

            <div className='flex flex-col gap-2 border-b border-[#eaeef4] pt-8 pb-5 px-6'>
              <div className='flex items-center gap-1'>
                <img src="/assets/ton.svg" alt="ton" />
                <h4 className='text-gray_900 text-xs f-pretendard-b'>TON</h4>
                <h6 className='text-gray_400 text-xs f-pretendard-m'>코인</h6>
              </div>

              <h1 className='f-pretendard-b text-gray_900 text-[22px] leading-[32px]'>TON 생태계 알고 최대 20 USDT와 SBT 에어드랍 받자</h1>

              <div className='flex flex-col gap-1'>
                <div className='flex gap-3 items-center'>
                  <h6 className='text-gray_400 text-xs f-pretendard-m leading-[18px]'>자격 조건</h6>
                  <h4 className='text-gray_900 text-xs f-pretendard-m leading-[18px]'>TON Wallet 을 개설한 테더맥스 회원</h4>
                </div>

                <div className='flex gap-3 items-center'>
                  <h6 className='text-gray_400 text-xs f-pretendard-m leading-[18px]'>기간</h6>
                  <h4 className='text-gray_900 text-xs f-pretendard-m leading-[18px]'>24.06.24 17:00 ~ 24.07.23 23:59(KST)</h4>
                </div>

                <div className='flex gap-3 items-center'>
                  <h6 className='text-gray_400 text-xs f-pretendard-m leading-[18px]'>보상</h6>
                  <h4 className='text-blue_700 text-xs f-pretendard-m leading-[18px]'>최대 20 USDT (24.07.24 이후 순차 지급)</h4>
                </div>
              </div>
            </div>

            <div className='py-5 px-6'>
              <h3 className='f-pretendard-m text-[15px] leading-[22px] text-gray_700'>[TON X tetherMax]</h3>
              <h5 className='f-pretendard-m text-[15px] leading-[22px] text-gray_700'>
                테더맥스 트레이더 분들을 위해 WEB3 생태계를 알아볼 수 있는 캠페인을 준비했어요. <br />
                간단한 미션들을 수행하고 20 USDT 상당의 이벤트 리워드와 SBT를 에어드랍 받아요! Web3 학습 효과는 덤!
              </h5>
              <h3 className='f-pretendard-m text-[15px] leading-[22px] text-gray_700 mt-4'>
                <strong className="f-pretendard-b">※ SBT(Soul-Bound Token)</strong>이란?
              </h3>
              <h3 className='f-pretendard-m text-[15px] leading-[22px] text-gray_700 mt-4'>
                소울바운드토큰(SBT)은 토큰이 소유자와 영혼(Soul) 처럼 결속되어, 어떠한 상황에서도 양도가 불가능한 토큰이에요. <br />
                NFT와는 다르게 전송이나 거래가 불가능해서 고유의 인증서 같은 역할을 하고 있어요. <br />
                TON에서도 SBT를 발행하고 있는데, <br />
                이번 SBT 캠페인은 테더맥스 트레이더이자 TON Society의 일원이란 증표에요. <br />
                TetherMax 트레이더 분들을 위해 모든 이벤트 참여자분들에게 SBT가 에어드랍 될 예정이에요!
              </h3>
            </div>

            <div className='flex flex-col gap-3 py-5 px-6'>
              <div className='bg-gray_50 rounded-2xl flex flex-col gap-2 p-4'>
                <div className='flex items-center gap-2'>
                  <img src="/assets/_ton.svg" alt="_ton" />
                  <h4 className='text-gray_900 text-[15px] f-pretendard-sm leading-[22px]'><strong className="text-blue_700">TON 지갑 주소</strong>를 입력해요 (5 USDT)</h4>
                </div>
                <h3 className='text-gray_500 text-[13px] f-pretendard-m leading-[20px]'>
                  TON Wallet 지갑을 만들어 주소를 붙여넣고, ‘등록’ 버튼 클릭만 하면 끝! <br />
                  TON 지갑 주소 확인 방법은
                  <strong className="text-blue_700"> 하단</strong>에 적혀있어요.
                </h3>

                <div className='flex items-center gap-1'>
                  <input
                    type="text"
                    placeholder="TON 지갑 주소 입력"
                    className="w-full border border-gray-100 rounded-lg px-4 bg-white h-12 flex outline-none text-gray-900 text-[15px] f-pretendard-m"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                  />
                  <button
                    className={`text-[15px] f-pretendard-b w-20 flex items-center justify-center h-12 text-white text-center rounded-xl ${walletAddress.length >= 10 ? 'bg-blue-700' : 'bg-blue-200'
                      }`}
                  >
                    등록
                  </button>
                </div>
              </div>

              <div className='bg-gray_50 rounded-2xl flex flex-col gap-2 p-4'>
                <div className='flex items-center gap-2'>
                  <img src="/assets/slider.svg" alt="slider" />
                  <h4 className='text-gray_900 text-[15px] f-pretendard-sm leading-[22px]'>테더맥스에 온보딩된 거래소에서 <strong className="text-blue_700">TON 선물</strong> 거래해요 (15 USDT)</h4>
                </div>
                <h3 className='text-gray_500 text-[13px] f-pretendard-m leading-[20px]'>
                  Bybit, Bitget, OKX 중 테더맥스 UID를 등록하고 TON 코인 으로 선물 거래량 $50,000 이상 거래해 보세요! <br />
                  Bybit, Bitget, OKX 중 테더맥스 UID를 등록하고 TON 코인 으로 선물 거래량 $50,000 이상 거래해 보세요!
                  <br />
                  *테더맥스에 등록된 UID를 입력해야해요
                </h3>
                <div className='flex items-center px-4 border border-gray_100 bg-white h-12 flex-auto rounded-lg'>
                  <div className='flex cursor-pointer'>
                    <img src="/assets/bybit.webp" alt="bybit" />
                    <img src="/assets/down-arrow.png" alt="bybit" />
                  </div>
                  <input
                    type="text"
                    className="text-gray-900 flex-1 text-[15px] f-pretendard-m outline-none border-none bg-transparent h-full w-full"
                    placeholder="UID를 입력해주세요"
                    value={uid}
                    onChange={(e) => setUid(e.target.value)}
                  />
                </div>

                <button
                  className={`px-4 text-white text-[15px] text-center f-pretendard-m h-12 rounded-xl w-fit ${uid.length >= 3 ? 'bg-blue-700' : 'bg-blue-200'
                    }`}
                >
                  TON 거래할 UID 등록
                </button>
              </div>

              <div className='bg-gray_50 rounded-2xl flex flex-col gap-2 p-4'>
                <div className='flex items-center gap-2'>
                  <img src="/assets/globel.svg" alt="globel" />
                  <h4 className='text-gray_900 text-[15px] f-pretendard-m'><strong className="text-blue_700">TON Society</strong> 방문하고 지갑 연동하기</h4>
                </div>
                <h3 className='text-gray_900 text-[13px] leading-[22px] f-pretendard-m'>TON 지갑이 있다면 1초도 안걸려요</h3>

                <div className='bg-white border border-gray-100 rounded-lg h-12 px-4 w-full'>
                  <input readOnly value=" https://society.ton.org/tetherMax" className='text-gray_900 text-[15px] f-pretendard-m border-none outline-none h-full w-full' />
                </div>
                <button className='bg-blue_700 px-4 text-white text-[15px] text-center f-pretendard-m h-12 rounded-xl w-fit'>방문하기</button>
              </div>

              <div className='py-5 flex flex-col gap-4'>
                <h2 className='text-gray_900 text-[17px] f-pretendard-sm leading-[26px]'>TON(The Open Network) 알아보기</h2>
                <h6 className='text-gray-700 text-[15px] f-pretendard-m'>TON은 여러 구성 요소로 이루어진 분산형 오픈 인터넷 플랫폼이며, 글로벌 유명 메신저 텔레그램에서 사용되는 블록체인이에요.
                  <br />
                  TON은 대규모의 크로스체인 상호운용성을 달성하면서도 확장 가능하고 안전한 프레임워크 내에서 운영되는 것을 목표로 하고 있어요.
                  <br />
                  더불어, 초당 수백만 건의 거래(TPS)를 처리하도록 설계되었으며, 앞으로 수억 명의 사용자를 온보딩하기 위해 힘쓰고 있어요.
                </h6>

                <h6 className='text-gray-700 text-[15px] f-pretendard-m'>
                  TON이라는 블록체인을 통해 텔레그램에서 톤 코인($TON)을 사용하며 다양한 유틸리티를 경험할 수 있어요.
                  <br />
                  텔레그램은 9억 명이라는 대규모 사용자를 기반으로 톤 스페이스를 통합한 결과,
                  <br />
                  톤 생태계가 확장됨에 따라 텔레그램 기반의 프로젝트들도 연일 흥행 가도를 달리고 있어요!
                  <br />
                  최근, TON에서 흥행하고 있는 Game-Fi 중 하나인 캐티즌(Catizen)은 매출을 1000만 달러의 매출을 돌파했어요.
                </h6>

                <h6 className='text-gray-700 text-[15px] f-pretendard-m'>
                  텔레그램은 단순 메신저를 넘어 글로벌 슈퍼앱으로의 도약을 진행하고 있습니다.
                  <br />
                  이를 위해 TON을 결합하여 사용자 경험이 최적화된 생태계를 구성하고 있어요.<br />
                  미니 앱을 통해 사용자들은 자연스럽게 캐티즌 같은 컨텐츠와 서비스들을 접할 수 있으니 <br />
                  웹3의 대중화에 십분 기여하는 블록 체인이라고 할 수 있죠! <br />
                </h6>

                <h6 className='text-gray-700 text-[15px] f-pretendard-m'>
                  앞으로 TON 프로젝트의 혁신과 성장을 기대해주세요.
                </h6>
              </div>
            </div>
          </div>

          <div className='py-5 px-6 flex flex-col gap-3 bg-white'>
            <h2 className='text-gray_900 text-xl f-pretendard-b leading-[30px]'>꼭 읽어주세요</h2>

            <div>
              {/* Accordion 01 */}
              <div className={classNames('', { 'border border-blue-700': openIndex === 0, 'border-b border-[#eaeef4]': openIndex !== 0 })}>
                <div className={classNames('py-3 px-4 flex items-center justify-between cursor-pointer', { 'bg-gray_50': openIndex === 0, '': openIndex !== 0 })} onClick={() => toggleAccordion(0)}>
                  <div className="flex items-center gap-2">
                    <img src="/assets/blue-tikmark.svg" alt="blue-tikmark" width={20} height={20} />
                    <h3 className="text-gray_700 text-[15px] f-pretendard-sm">TON 지갑주소는 어떻게 확인하나요?</h3>
                  </div>
                  <img
                    src="/assets/accordin-arrow.svg"
                    alt="accordin-arrow"
                    className={classNames({ 'transform rotate-180': openIndex === 0 })}
                  />
                </div>
                {openIndex === 0 && (
                  <div className="py-3 px-4 flex flex-col gap-3">
                    <div className="bg-[#eaeef4] flex justify-center items-center rounded-xl">
                      <img src="/assets/wallet01.webp" alt="wallet01" className="h-[243px] w-auto" width={243} height={243} />
                    </div>

                    <h4 className='text-gray_700 text-[15px] f-pretendard-m'>먼저 <strong className="text-blue_700">텔레그램</strong>을 설치해야해요. <br />텔레그램 상단의 검색 아이콘을 클릭 후 ‘wallet’을 검색해주세요</h4>

                    <div className="bg-[#eaeef4] flex justify-center items-center rounded-xl">
                      <img src="/assets/wallet02.webp" alt="wallet02" className="h-[243px] w-auto" width={243} height={243} />
                    </div>

                    <h4 className='text-gray_700 text-[15px] f-pretendard-m'>시작 버튼을 클릭하고 월렛 열기 를 클릭해요</h4>

                    <div className="bg-[#eaeef4] flex justify-center items-center rounded-xl">
                      <img src="/assets/wallet03.webp" alt="wallet03" className="h-[243px] w-auto" width={243} height={243} />
                    </div>

                    <h4 className='text-gray_700 text-[15px] f-pretendard-m'>이용약관에 동의하고 계속하기 를 클릭해요</h4>

                    <div className="bg-[#eaeef4] flex justify-center items-center rounded-xl">
                      <img src="/assets/wallet04.webp" alt="wallet04" className="h-[243px] w-auto" width={243} height={243} />
                    </div>

                    <h4 className='text-gray_700 text-[15px] f-pretendard-m'>시작해요 버튼을 클릭해요</h4>

                    <div className="bg-[#eaeef4] flex justify-center items-center rounded-xl">
                      <img src="/assets/wallet05.webp" alt="wallet05" className="h-[243px] w-auto" width={243} height={243} />
                    </div>

                    <h4 className='text-gray_700 text-[15px] f-pretendard-m'>자산 더보기 를 클릭 후 Toncoin 을 선택해요</h4>

                    <div className="bg-[#eaeef4] flex justify-center items-center rounded-xl">
                      <img src="/assets/wallet06.webp" alt="wallet06" className="h-[243px] w-auto" width={243} height={243} />
                    </div>

                    <h4 className='text-gray_700 text-[15px] f-pretendard-m'>수령 을 선택 후 알겠습니다를 클릭하면 지갑 주소를 확인할 수 있어요!</h4>



                  </div>
                )}
              </div>

              {/* Accordion 02 */}
              <div className={classNames('', { 'border border-blue-700': openIndex === 1, 'border-b border-[#eaeef4]': openIndex !== 1 })}>
                <div className={classNames('py-3 px-4 flex items-center justify-between cursor-pointer', { 'bg-gray_50': openIndex === 1, '': openIndex !== 1 })} onClick={() => toggleAccordion(1)}>
                  <div className="flex items-center gap-2">
                    <img src="/assets/blue-tikmark.svg" alt="blue-tikmark" width={20} height={20} />
                    <h3 className="text-gray_700 text-[15px] f-pretendard-sm">선물 거래량 50,000$?</h3>
                  </div>
                  <img
                    src="/assets/accordin-arrow.svg"
                    alt="accordin-arrow"
                    className={classNames({ 'transform rotate-180': openIndex === 1 })}
                  />
                </div>
                {openIndex === 1 && (
                  <div className="py-3 px-4 flex flex-col gap-12">
                    <h4 className='text-gray_700 text-[15px] f-pretendard-m'>
                      선물 거래량이란 선물 거래에서 거래한 코인 금액과 레버리지를 곱한 금액을 뜻해요. <br />
                      예를들어 10배의 레버리지로 2500$을 한 번 거래했다면, <br />
                      매수와 매매, 총 2번에 걸쳐서 이벤트 기준인 선물거래량 2500$ * 10배 * 2번 = 50,000$을 충족할 수 있답니다!
                    </h4>
                  </div>
                )}
              </div>

              {/* Accordion 03 */}
              <div className={classNames('', { 'border border-blue-700': openIndex === 2, 'border-b border-[#eaeef4]': openIndex !== 2 })}>
                <div className={classNames('py-3 px-4 flex items-center justify-between cursor-pointer', { 'bg-gray_50': openIndex === 2, '': openIndex !== 2 })} onClick={() => toggleAccordion(2)}>
                  <div className="flex items-center gap-2">
                    <img src="/assets/blue-tikmark.svg" alt="blue-tikmark" width={20} height={20} />
                    <h3 className="text-gray_700 text-[15px] f-pretendard-sm">TON Society에 지갑 연동?</h3>
                  </div>
                  <img
                    src="/assets/accordin-arrow.svg"
                    alt="accordin-arrow"
                    className={classNames({ 'transform rotate-180': openIndex === 2 })}
                  />
                </div>
                {openIndex === 2 && (
                  <div className="py-3 px-4 flex flex-col gap-12">
                    <div className="bg-[#eaeef4] flex justify-center items-center rounded-xl">
                      <img src="/assets/society01.webp" alt="society01" className="h-[243px] w-auto" width={243} height={243} />
                    </div>

                    <h4 className='text-gray_700 text-[15px] f-pretendard-m'>
                      PC로 TON Society 사이트에 방문하면, <br />
                      오른쪽 상단에 Connect wallet 이라는 버튼이 보일거에요. 버튼을 클릭하면 이미지와 같은 팝업창이 떠요
                    </h4>

                    <div className="bg-[#eaeef4] flex justify-center items-center rounded-xl">
                      <img src="/assets/society02.webp" alt="society02" className="h-[243px] w-auto" width={243} height={243} />
                    </div>

                    <h4 className='text-gray_700 text-[15px] f-pretendard-m'>
                      일반 카메라에서는 QR 스캔이 불가능해요. <br />
                      TON 지갑을 열어서 오른쪽 상단에 있는 QR 스캔 버튼을 눌러주시면 지갑 연동은 끝!
                    </h4>

                    <div className="bg-[#eaeef4] flex justify-center items-center rounded-xl">
                      <img src="/assets/society03.webp" alt="society03" className="h-[243px] w-auto" width={243} height={243} />
                    </div>

                    <h4 className='text-gray_700 text-[15px] f-pretendard-m'>
                      모바일로 TON Society에 방문했다면, <br />
                      오른쪽 상단에 Connect 버튼을 터치해주세요. <br />
                      이후 나타는 모달에서 Open Wallet in Telegram 을 터치하면, 연동 끝! <br />
                      단, Telegram 앱이 설치된 상태여야 합니다 <br />
                    </h4>


                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='bg-gray_55 pt-8 pb-[88px] px-5 flex flex-col gap-3'>
            <h2 className='text-gray_700 text-[15px] f-pretendard-b'>유의사항</h2>

            <ul className="pl-4 list-disc text-gray_500 text-[15px] f-pretendard-m">
              <li>본 이벤트는 당사 또는 제휴사의 사정으로 예고 없이 조기 종료될 수 있습니다.</li>
              <li>비정상적인 방법으로 참여할 경우 리워드 지급에 제한이 있을 수 있습니다.</li>
              <li>선물 거래 보상의 경우 테더맥스 레퍼럴 코드로 가입 및 연동 완료된 하나의 계정으로만 참여 가능합니다.</li>
              <li>Bybit, Bitget, OKX에서 선물 거래한 내역만 해당됩니다. TONUSDT Perpetual 을 확인해주세요.</li>
              <li>TON 거래량에 따른 순위는 내부적으로 산출될 예정입니다.</li>
              <li>지정된 거래소가 아닌 경우 참여가 불가합니다.</li>
              <li>TON 지갑 주소만 이벤트 참여 대상입니다.</li>
              <li>TON 지갑 주소 생성 보상(5 USDT)을 받기 위해서는 Bybit, Bitget, OKX에서 만든 테더맥스 UID 연동이 필요합니다.</li>
              <li>선물 거래의 경우 지정된 기간 동안의 거래에 대해서만 인정됩니다.</li>
              <li>이벤트 리워드는 각 이벤트 참여 상태와 실제 완료 여부에 따라 7월 24일부터 순차적으로 지급될 예정입니다.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tonsociety