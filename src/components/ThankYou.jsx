import thankYouIcon from "../assets/icon-thank-you.svg";

function ThankYou() {
  return (
    <div className="flex flex-col items-center gap-[25px]">
      <div className="flex">
        <img src={thankYouIcon} />
      </div>
      <div className="flex text-3xl font-bold">Thank You!</div>
      <div className="flex text-cool-gray text-center">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </div>
    </div>
  )
}

export default ThankYou;