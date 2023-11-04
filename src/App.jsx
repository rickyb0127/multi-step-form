import SidePanel from './components/SidePanel';
import ActiveForm from './components/ActiveForm';
import { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[590px] w-[90vw] max-w-[1000px] bg-white rounded-md hidden-mobile">
        <div className="flex">
          <SidePanel currentStep={currentStep} setCurrentStep={setCurrentStep} />
          <ActiveForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
      </div>
      <div className="hidden flex-col show-mobile">
        <SidePanel currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <ActiveForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </>
  )
}

export default App;
