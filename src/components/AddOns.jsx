function AddOns(props) {
  const availableAddOns = [
    {
      id: 1,
      name: "Online service",
      details: "Access to multiplayer games",
      pricePerMonth: 1,
      pricePerYear: 10
    },
    {
      id: 2,
      name: "Larger storage",
      details: "Extra 1TB of cloud save",
      pricePerMonth: 2,
      pricePerYear: 20
    },
    {
      id: 3,
      name: "Customizable profile",
      details: "Customize theme on your profile",
      pricePerMonth: 2,
      pricePerYear: 20
    }
  ];

  const updateSelectedAddOns = (addOn) => {
    let updatedAddOns = [...props.selectedAddOns]
    const index = props.selectedAddOns.map(selectedAddOn => selectedAddOn.id).indexOf(addOn.id);
    if(index === -1) {
      updatedAddOns.push(addOn);
    } else {
      updatedAddOns.splice(index, 1);
    }

    props.setSelectedAddOns(updatedAddOns);
  };

  const addOnsView = availableAddOns.map((addOn) => {
    return (
      <div 
        key={addOn.id} 
        className={`flex flex-row h-[80px] rounded-md border border-purplish-blue border-solid justify-between items-center mb-[20px] cursor-pointer ${props.selectedAddOns.find(selectedAddOn => selectedAddOn.id === addOn.id) ? "bg-magnolia" : ""}`}
        onClick={() => {updateSelectedAddOns(addOn)}}
      >
        <div className="flex pl-[20px] items-center">
          <input 
            className="add-ons-input"
            type="checkbox" 
            name={`add-on-${addOn.id}`}
            id={`add-on-${addOn.id}`}
            checked={props.selectedAddOns.length > 0 && props.selectedAddOns.map(selectedAddOn => selectedAddOn.id).includes(addOn.id)}
            onChange={() => updateSelectedAddOns(addOn)}
          />
          <div className="flex flex-col pl-[20px]">
            <div className="flex font-semibold">{addOn.name}</div>
            <div className="flex text-cool-gray">{addOn.details}</div>
          </div>
        </div>
        <div className="flex pr-[20px]">
          <div className="flex text-purplish-blue">+${props.selectedPlan.billingFrequency === "Monthly" ? addOn.pricePerMonth + '/mo' : addOn.pricePerYear + '/yr'}</div>
        </div>
      </div>
    )
  });

  return (
    <form>
      <h1 className="text-[30px] font-bold text-marine-blue pb-[10px]">Pick add-ons</h1>
      <div className="pb-[30px] text-cool-gray">Add-ons help enhance your gaming experience.</div>

      <div className="flex flex-col justify-between">
        { addOnsView }
      </div>
    </form>
  )
}

export default AddOns;