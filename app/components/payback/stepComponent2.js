"use client"
import React, { useState } from 'react';

const StepComponent2 = ({ onNext }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Ensure only numeric input
      setInputValue(value);
    }
  };

  return (
    <div className="w-full h-full relative flex flex-col justify-between">
      <div className='flex flex-col gap-6'>
        <div>
          <h3 className="text-2xl f-pretendard-b mb-1 leading-[150%] text-gray_900">레버리지 얼마나 <br />사용하시나요?</h3>
          <p className="text-base f-pretendard-sm mb-5 leading-[150%] text-gray_500">평균적인 레버리지 배율을 알려주세요</p>
        </div>

        <div className={`border-b ${isFocused ? 'border-blue_700' : 'border-gray_100'} pb-2 flex gap-1`}>
          <input
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            className='flex-1 text-gray_900 outline-none f-pretendard-b bg-transparent border-none text-[22px]'
            placeholder='1 ~ 125 (숫자를 입력해주세요)'
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <span className="text-gray_900 f-pretendard-b text-[22px] cursor-pointer">x</span>
        </div>
      </div>
      <button
        onClick={onNext}
        className={`w-full h-14 text-white absolute mx-auto -bottom-8 md:-bottom-4 rounded-xl text-lg f-pretendard-b ${inputValue ? 'bg-blue_700' : 'bg-blue_200 cursor-not-allowed'}`}
        disabled={!inputValue}
      >
        다음
      </button>
    </div>
  );
};

export default StepComponent2;
