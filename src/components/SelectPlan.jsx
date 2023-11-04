import { useState } from 'react';

function SelectPlan(props) {
  const {selectedPlan, setSelectedPlan, planOptions} = props;
  const [selectedBillingFrequency, setSelectedBillingFrequency] = useState(selectedPlan.billingFrequency);

  const updateSelectedPlan = (newSelectedPlan, newBillingFrequency) => {
    const updatedPlan = {
      plan: newSelectedPlan,
      billingFrequency: newBillingFrequency || selectedBillingFrequency
    };

    setSelectedBillingFrequency(updatedPlan.billingFrequency);
    setSelectedPlan(updatedPlan);
  };

  const planView = planOptions.map((planOption) => {
    return (
      <div 
        key={planOption.id} 
        className={`flex mobile:flex-row laptop:flex-col desktop:flex-col mobile:w-full laptop:w-[140px] desktop:w-[140px] mobile:h-[80px] laptop:h-auto desktop:h-auto rounded-md border border-solid mobile:justify-normal laptop:justify-evenly desktop:justify-evenly mobile:items-center laptop:items-baseline desktop:items-baseline mobile:gap-[15px] laptop:gap-0 desktop:gap-0 pl-[20px] cursor-pointer ${selectedPlan.plan.id === planOption.id ? "bg-magnolia border-purplish-blue" : "border-light-gray"}`}
        onClick={() => {updateSelectedPlan(planOption)}}
      >
        <div className="flex"><img src={planOption.imgSrc} /></div>
        <div className="flex flex-col">
          <div className="flex text-purplish-blue font-semibold">{planOption.name}</div>
          <div className="flex text-cool-gray">${planOption.pricePerMonth}/mo</div>
          { selectedBillingFrequency === "Yearly" && <div className="flex text-purplish-blue text-sm">{planOption.numFreeMonths} months free</div> }
        </div>
      </div>
    )
  });

  return (
    <form>
      <h1 className="text-[30px] font-bold text-marine-blue pb-[10px]">Select your plan</h1>
      <div className="pb-[30px] text-cool-gray">You have the option of monthly or yearly billing.</div>

      <div className="flex mobile:flex-col laptop:flex-row desktop:flex-row mobile:h-auto laptop:h-[180px] desktop:h-[180px] justify-between mb-[30px] gap-[10px]">
        { planView }
      </div>

      <div className="flex w-full h-[40px] bg-magnolia justify-center items-center rounded">
        <div className="flex">
          <div className={`flex pr-[20px] font-semibold ${selectedBillingFrequency === "Monthly"? "text-marine-blue" : "text-light-gray"}`}>Monthly</div>
          <div className="flex">
            <label className="switch">
              <input 
                type="checkbox" 
                name="billing-frequency-toggle" 
                id="billing-frequency-toggle" 
                checked={selectedBillingFrequency === "Monthly"}
                onChange={() => updateSelectedPlan(selectedPlan.plan, selectedBillingFrequency === "Monthly" ? "Yearly" : "Monthly")}
              />
              { selectedBillingFrequency === "Monthly" ?
                <span className="slider month round" id="slider-month"></span> :
                <span className="slider year round" id="slider-year"></span>
              }
            </label>
          </div>
          <div className={`flex pl-[20px] font-semibold ${selectedBillingFrequency === "Yearly"? "text-marine-blue" : "text-cool-gray"}`}>Yearly</div>
        </div>
      </div>
    </form>
  )
}

export default SelectPlan;