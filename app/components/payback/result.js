"use client"
import React from 'react';

const ResultComponent = () => {
    return (
        <div className="bg-white h-full p-6 flex flex-col justify-center items-center w-full">

            <video src="/assets/calculator.mp4" className="w-[500px]"></video>
            <h2 className="text-2xl f-pretendard-b text-gray_900 leading-[150%] mb-3 text-center">잠시만 기다려주세요 <br/>
                AI가 1,658건의 데이터를 <br/>
                계산중입니다
            </h2>
            <p className="text-gray_500 text-[17px] f-pretendard-m">테더맥스가 맥스로 페이백 해드려요</p>
        </div>
    );
};

export default ResultComponent;
