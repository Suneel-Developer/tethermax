"use client"
import React, { useState } from 'react';
import StepComponent from './stepComponent1';
import StepComponent2 from './stepComponent2';
import StepComponent3 from './stepComponent3';
import StepComponent4 from './stepComponent4';
import ResultComponent from './result';

const Steps = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedExchange, setSelectedExchange] = useState('');

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        } else if (currentStep === 4) {
            setCurrentStep(currentStep + 1); // To show the result component after step 4
        }
    };

    const handleSelectExchange = (exchangeName) => {
        setSelectedExchange(exchangeName);
    };

    const renderStepComponent = () => {
        switch (currentStep) {
            case 1:
                return <StepComponent onNext={handleNext} onSelectExchange={handleSelectExchange} />;
            case 2:
                return <StepComponent2 onNext={handleNext} />;
            case 3:
                return <StepComponent3 onNext={handleNext} selectedExchange={selectedExchange} />;
            case 4:
                return <StepComponent4 onNext={handleNext} />;
            case 5:
                return <ResultComponent />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-gray-50 paybackheight">
            <div className="w-full max-w-[840px] mx-auto px-6 pb-8 h-full flex flex-col gap-6">
                {currentStep <= 4 && (
                    <div className="rounded-[2px] bg-gray-100 w-full h-1 relative mt-6">
                        <div
                            className="h-full bg-blue-700 rounded-[2px] transition-width duration-300"
                            style={{ width: `${(currentStep / 4) * 100}%` }}
                        ></div>
                    </div>
                )}
                {renderStepComponent()}
            </div>
        </div>
    );
};

export default Steps;
