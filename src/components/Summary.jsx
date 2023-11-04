function Summary(props) {
  const {selectedPlan, selectedAddOns, setSelectedPlan} = props;

  const toggleBillingFrequency = () => {
    const newBillingFrequency = selectedPlan.billingFrequency === "Monthly" ? "Yearly" : "Monthly";

    const updatedPlan = {
      plan: selectedPlan.plan,
      billingFrequency: newBillingFrequency
    };

    setSelectedPlan(updatedPlan);
  };

  const getTotal = () => {
    let planTotal = 0;
    let totalString = "+$";

    if(selectedPlan.billingFrequency === "Monthly") {
      planTotal += selectedPlan.plan.pricePerMonth;
      const combinedTotal = selectedAddOns.reduce((total, currAddOn) => {
        return total += currAddOn.pricePerMonth;
      }, planTotal);

      totalString += `${combinedTotal}/mo`;
    } else {
      planTotal += selectedPlan.plan.pricePerYear;
      const combinedTotal = selectedAddOns.reduce((total, currAddOn) => {
        return total += currAddOn.pricePerMonth;
      }, planTotal);

      totalString += `${combinedTotal}/year`;
    }

    return totalString;
  };

  const addOnsSection = selectedAddOns.map((addOn) => {
    return (
      <div key={addOn.id} className="flex w-full justify-between">
        <div className="flex">
          <div className="flex text-cool-gray">{addOn.name}</div>
        </div>
        <div className="flex text-marine-blue">
          {selectedPlan.billingFrequency === "Monthly" ?
            <>+${addOn.pricePerMonth}/mo</> :
            <>+${addOn.pricePerYear}/yr</>
          }
        </div>
      </div>
    )
  });

  return (
    <form>
      <h1 className="text-[30px] font-bold text-marine-blue pb-[10px]">Finishing up</h1>
      <div className="pb-[30px] text-cool-gray">Double-check everything looks OK before confirming.</div>

      <div className="flex flex-col">
        <div className="flex flex-col bg-magnolia p-[30px] rounded-md">
          <div className={`flex w-full justify-between ${selectedAddOns.length > 0 ? "border-b border-light-gray pb-[20px]" : ""}`}>
            <div className="flex flex-col">
              <div className="flex text-marine-blue font-bold">{`${selectedPlan.plan.name} (${selectedPlan.billingFrequency})`}</div>
              <div className="flex cursor-pointer underline text-cool-gray hover:text-purplish-blue" onClick={() => toggleBillingFrequency()}>Change</div>
            </div>
            <div className="flex text-marine-blue font-bold">
              {selectedPlan.billingFrequency === "Monthly" ?
                <>${selectedPlan.plan.pricePerMonth}/mo</> :
                <>${selectedPlan.plan.pricePerYear}/yr</>
              }
            </div>
          </div>
          <div className="flex flex-col pt-[20px] gap-[10px]">
            { addOnsSection }
          </div>
        </div>
        <div className="flex p-[30px]">
          <div className="flex w-full justify-between">
            <div className="flex text-cool-gray">
              <span>Total</span>
              {selectedPlan.billingFrequency === "Monthly" ?
                <span>(per month)</span> :
                <span>(per year)</span>
              }
            </div>
            <div className="flex text-purplish-blue font-bold">
              <span>{getTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Summary;