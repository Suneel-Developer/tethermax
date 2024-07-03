"use client"
import React, { useState } from 'react';

const StepComponent4 = ({ onNext }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };


  const options = [
    { name: '하루에 1번 할까 말까해요' },
    { name: '하루에 1회 - 2회 거래해요' },
    { name: '하루에 2회 - 5회 거래해요' },
    { name: '하루에 5회 - 10회 거래해요' },
    { name: '하루에 10회 이상 거래해요' },
  ];
  return (
    <div className="w-full h-full relative flex flex-col justify-between">
      <div className='flex flex-col gap-6'>
        <div>
          <h3 className="text-2xl f-pretendard-b mb-1 leading-[150%] text-gray_900">하루에 몇 번 정도 <br />거래하시나요?</h3>
          <p className="text-base f-pretendard-sm mb-5 leading-[150%] text-gray_500">거래 성향을 알려주세요</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`border h-14 hover:bg-blue_50 transition-all duration-200 relative px-3 rounded-xl cursor-pointer flex items-center justify-center ${selected === index ? 'border-blue_700 bg-blue_55' : 'border-gray_100 bg-white'}`}
            >
              <div className='absolute my-auto left-3'>
                <img src={selected === index ? "/assets/blue-tikmark.svg" : "/assets/tikmark-box.svg"} alt="" />
              </div>
              <span className={`text-lg f-pretendard-b ${selected === index ? 'text-blue_700' : "text-[#6a7583]"}`}>{option.name}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={onNext}
        className={`w-full h-14 text-white absolute mx-auto -bottom-8 md:-bottom-4 rounded-xl text-lg f-pretendard-b ${selected !== null ? 'bg-blue_700' : 'bg-blue_200 cursor-not-allowed'}`}
        disabled={selected === null}
      >
        다음
      </button>
    </div>
  );
};

export default StepComponent4;
