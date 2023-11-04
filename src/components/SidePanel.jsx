import { useEffect, useState } from "react";

function SidePanel(props) {
  const [steps, setSteps] = useState([]);

  const setStepsActiveState = () => {
    const newStepsState = [
      {
        id: 1,
        name: "Step 1",
        details: "YOUR INFO",
        isActive: props.currentStep === 1
      },
      {
        id: 2,
        name: "Step 2",
        details: "SELECT PLAN",
        isActive: props.currentStep === 2
      },
      {
        id: 3,
        name: "Step 3",
        details: "ADD-ONS",
        isActive: props.currentStep === 3
      },
      {
        id: 4,
        name: "Step 4",
        details: "SUMMARY",
        isActive: props.currentStep >= 4
      }
    ];

    setSteps(newStepsState);
  };

  useEffect(() => {
    if(props.currentStep) {
      setStepsActiveState();
    }
  },[props.currentStep]);

  const stepView = steps.map((step) => {
    return (
      <div key={step.id} className="flex mobile:flex-col laptop:flex-row desktop:flex-row">
        <div className={`flex w-[40px] h-[40px] ml-[30px] mr-[20px] rounded-full justify-center items-center ${step.isActive ? "bg-light-blue" : "text-white border"}`}>{step.id}</div>
        <div className="mobile:hidden laptop:flex desktop:flex flex-col">
          <div className="flex text-cool-gray">{step.name}</div>
          <div className="flex text-white">{step.details}</div>
        </div>
      </div>
    )
  });

  return (
    <div className="flex flex-row laptop:p-[10px] desktop:p-[10px]">
      <div className="flex flex-col side-panel-bg">
        <div className="flex mobile:flex-row laptop:flex-col desktop:flex-col mobile:justify-center laptop:justify-around desktop:justify-around pt-[30px] basis-[50%]">
          { stepView }
        </div>
      </div>
    </div>
  )
}

export default SidePanel;