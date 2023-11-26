import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Slider from "./components/Slider";
import InfoCards from "./components/InfoCards";

function App() {

  // style
  const cardBgColor = "#ffe396";

  const [selectedNumber , setSelectedNumber] = useState(null);
  const [sliderValue , setSliderValue] = useState(1);
  const [prePayment , setPrePayment] = useState(sliderValue);
  const [monthlyPayment , setMonthlyPayment] = useState(sliderValue *2);
  // i need the check formula
  const [checkNumber , setCheckNumber] = useState();
  const [finalPrice , setFinalPrice] = useState();

  console.log(typeof(selectedNumber))
  console.log(typeof(sliderValue));
  
  function handelSelectedNumber(number) {
    setSelectedNumber(number);
    setPrePayment(  number/2 +sliderValue);
    setMonthlyPayment( number / 2 +sliderValue)
  }

  function handleSliderValue(value){
    setSliderValue(value);
    setPrePayment( selectedNumber/2 + sliderValue);
    setMonthlyPayment(selectedNumber / 2 + sliderValue);
  } 


  return (
    <div className="flex flex-col items-center justify-center w-[80%] h-auto mx-auto bg-gray-100 py-10">
      <div className="flex flex-col gap-3 w-[50%] h-full pt-3">
        <span className="rtl">مدت بازپرداخت مورد نظر خود را انتخاب کنید</span>
       <Grid onSelectNumber={handelSelectedNumber} />
      </div>
      <div className="flex flex-row-reverse w-full justify-center h-16 mt-10">
        <div className="flex flex-col justify-center items-center gap-2 border-l-2 border-gray-400  px-8">
          <span>پیش پرداخت</span>
          {prePayment}
        </div>
        <div className="flex flex-col px-8 justify-center items-center gap-2">
          <span>اقساط ماهیانه</span>
          {monthlyPayment}
        </div>
      </div>
      
      <div className="w-full">
        <Slider sliderValue={handleSliderValue} />
      </div>

      <div className="flex flex-col border border-gray-400 rounded-xl w-[50%] h-auto">
        <InfoCards valueName={"تومان"} valueNumber={prePayment} description={":پیش پرداخت"} />
        <InfoCards valueName={"ماهه"} valueNumber={selectedNumber} description={":دوره بازپرداخت"} color={{backgroundColor: cardBgColor}}/>
        <InfoCards valueName={"تومان"} valueNumber={monthlyPayment} description={":اقساط ماهیانه"}/>
        <InfoCards valueName={"برگ"} valueNumber={selectedNumber} description={":تعداد چک مورد نیاز"} color={{backgroundColor: cardBgColor}}/>
        <InfoCards valueName={"تومان"} valueNumber={sliderValue} description={":بازپرداخت نهایی"}/>
      </div>
    </div>
  );
}

export default App;
