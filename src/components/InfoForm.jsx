function InfoForm(props) {
  return (
    <form className="text-marine-blue">
      <h1 className="text-[30px] font-bold text-marine-blue pb-[10px]">Personal info</h1>
      <div className="pb-[30px] text-cool-gray">Please provide your name, email address, and phone number.</div>

      <div className="pb-[20px]">
        <div className="pb-[5px]">
          <div className="flex justify-between">
            <label className="flex">Name</label>
            {props.errorMessage && props.errorField === "name" && <div className="flex text-strawberry-red">{props.errorMessage}</div>}
          </div>
        </div>
        <input
          value={props.fullNameInput}
          onChange={(e) => props.setFullNameInput(e.target.value)}
          className={`info-input rounded-md w-full h-[45px] p-[15px] border solid font-medium ${props.errorField === "name" ? "border-strawberry-red" : "border-light-gray"}`}
          type="text"
          name="fullName"
          id="fullName"
          placeholder="e.g. Stephen King" 
        />
      </div>

      <div className="pb-[20px]">
          <div className="flex justify-between">
            <label className="flex">Email Address</label>
            {props.errorMessage && props.errorField === "email" && <div className="flex text-strawberry-red">{props.errorMessage}</div>}
          </div>
        <input
          value={props.emailInput}
          onChange={(e) => props.setEmailInput(e.target.value)}
          className={`info-input rounded-md w-full h-[45px] p-[15px] border solid font-medium ${props.errorField === "email" ? "border-strawberry-red" : "border-light-gray"}`}
          type="text"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com" 
        />
      </div>
          
      <div className="pb-[20px]">
        <div className="flex justify-between">
          <label className="flex">Phone Number</label>
          {props.errorMessage && props.errorField === "phone" && <div className="flex text-strawberry-red">{props.errorMessage}</div>}
        </div>
        <input
          value={props.phoneInput}
          onChange={(e) => props.setPhoneInput(e.target.value)}
          className={`info-input rounded-md w-full h-[45px] p-[15px] border solid font-medium ${props.errorField === "phone" ? "border-strawberry-red" : "border-light-gray"}`}
          type="text"
          name="phone"
          id="phone"
          placeholder="e.g. +1 123 567 890" 
        />
      </div>
    </form>
  )
}

export default InfoForm;