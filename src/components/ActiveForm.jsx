import { useState } from 'react';
import InfoForm from './InfoForm';
import SelectPlan from './SelectPlan';
import AddOns from './AddOns';
import Summary from './Summary';
import ThankYou from './ThankYou';
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";

function ActiveForm(props) {
  const planOptions = [
    {
      id: 1,
      name: "Arcade",
      pricePerMonth: 9,
      pricePerYear: 90,
      imgSrc: arcadeIcon,
      numFreeMonths: 2
    },
    {
      id: 2,
      name: "Advanced",
      pricePerMonth: 12,
      pricePerYear: 120,
      imgSrc: advancedIcon,
      numFreeMonths: 2
    },
    {
      id: 3,
      name: "Pro",
      pricePerMonth: 15,
      pricePerYear: 120,
      imgSrc: proIcon,
      numFreeMonths: 2
    }
  ];

  const defaultSelectedPlan = {
    plan: {
      id: 1,
      name: "Arcade",
      pricePerMonth: 9,
      pricePerYear: 90,
      imgSrc: arcadeIcon,
      numFreeMonths: 2
    },
    billingFrequency: "Monthly"
  };

  const [selectedPlan, setSelectedPlan] = useState(defaultSelectedPlan);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorField, setErrorField] = useState();

  const isValidEmail = () => {
    return emailInput.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validate = () => {
    if(!fullNameInput) {
      setErrorMessage("This field is required");
      setErrorField("name");
      return false;
    } else if(!emailInput) {
      setErrorMessage("This field is required");
      setErrorField("email");
      return false;
    } else if(!isValidEmail()) {
      setErrorMessage("Valid email is required");
      setErrorField("email");
      return false;
    } else if(!phoneInput) {
      setErrorMessage("This field is required");
      setErrorField("phone");
      return false;
    }

    setErrorMessage("");
    setErrorField(null);
    return true;
  };

  const increaseStep = () => {
    if(props.currentStep !== 1 || validate()) {
      props.setCurrentStep(props.currentStep + 1);
    }
  };

  const decreaseStep = () => {
    if(props.currentStep > 1) {
      props.setCurrentStep(props.currentStep - 1);
    }
  };

  return (
    <>
      <div className="flex mobile:mx-[30px] laptop:ml-auto desktop:ml-auto laptop:mr-auto desktop:mr-auto mobile:mt-[-140px] laptop:my-[50px] desktop:my-[50px] mobile:w-auto laptop-w-full desktop:w-full mobile:bg-white mobile:rounded-md min-h-[500px]">
        <div className={`flex flex-col w-full mobile:px-[40px] laptop:px-[10px] desktop:px-[120px] mobile:py-[40px] laptop:py-0 desktop:py-0 ${props.currentStep <= 4 ? "justify-between" : "justify-center"}`}>
          { props.currentStep === 1 && <InfoForm fullNameInput={fullNameInput} setFullNameInput={setFullNameInput} emailInput={emailInput} setEmailInput={setEmailInput} phoneInput={phoneInput} setPhoneInput={setPhoneInput} errorMessage={errorMessage} setErrorMessage={setErrorMessage} errorField={errorField} />}
          { props.currentStep === 2 && <SelectPlan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} planOptions={planOptions} />}
          { props.currentStep === 3 && <AddOns selectedAddOns={selectedAddOns} setSelectedAddOns={setSelectedAddOns} selectedPlan={selectedPlan} />}
          { props.currentStep === 4 && <Summary selectedAddOns={selectedAddOns} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />}
          { props.currentStep > 4 && <ThankYou />}
          { props.currentStep < 5 &&
            <div className="flex justify-between hidden-mobile">
              {props.currentStep === 1 ?
                <div></div> :
                <button onClick={ decreaseStep } className="px-[22px] py-[12px] bg-white rounded-md text-cool-gray hover:text-marine-blue">Go Back</button>
              }
              <button onClick={ increaseStep } className={`px-[22px] py-[12px] rounded-md text-white ${props.currentStep === 4 ? "bg-purplish-blue" : "bg-marine-blue"}`}>{props.currentStep === 4 ? 'Confirm' : 'Next Step'}</button>
            </div>
          }
        </div>
      </div>
      { props.currentStep < 5 &&
        <div className="hidden flex-row justify-between show-mobile p-[30px] mt-[30px] bg-white">
          {props.currentStep === 1 ?
            <div></div> :
            <button onClick={ decreaseStep } className="px-[22px] py-[12px] bg-white rounded-md text-cool-gray hover:text-marine-blue">Go Back</button>
          }
          <button onClick={ increaseStep } className={`px-[22px] py-[12px] rounded-md text-white ${props.currentStep === 4 ? "bg-purplish-blue" : "bg-marine-blue"}`}>{props.currentStep === 4 ? 'Confirm' : 'Next Step'}</button>
        </div>
      }
    </>
  )
}

export default ActiveForm;