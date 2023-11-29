import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import Slider from "./components/Slider";
import InfoCards from "./components/InfoCards";

function App() {

 

  // style
  const cardBgColor = "#ffe396";

  const [selectedNumber , setSelectedNumber] = useState(12);
  const [sliderValue , setSliderValue] = useState(1000000);
  const [prePayment , setPrePayment] = useState();
  const [monthlyPayment , setMonthlyPayment] = useState(sliderValue);
  const [finalPrice , setFinalPrice] = useState();

  const [result , setResult] = useState();

 
  window.onload = function() {
    sendSliderValueToPHP(sliderValue)
  }
  

  async function sendSliderValueToPHP(value) {
    try {
      const response = await fetch('http://localhost:8000/calculate.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input1: value }), // Send the sliderValue as input1
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      setResult(await response.json()); 
        handleResult(result);      


    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }


  function handleResult(result){
    if (selectedNumber === 12){
      setPrePayment(parseInt(result.out_1).toLocaleString('en-US'));
      setMonthlyPayment(parseInt(result.out_2).toLocaleString('en-US'));
      setFinalPrice(parseInt(result.out_3).toLocaleString('en-US'));
    }
    else if(selectedNumber === 18){
      setPrePayment(parseInt(result.out_4).toLocaleString('en-US'));
      setMonthlyPayment(parseInt(result.out_5).toLocaleString('en-US'));
      setFinalPrice(parseInt(result.out_6).toLocaleString('en-US'));
    }
    else if(selectedNumber === 24){
      setPrePayment(parseInt(result.out_7).toLocaleString('en-US'));
      setMonthlyPayment(parseInt(result.out_8).toLocaleString('en-US'));
      setFinalPrice(parseInt(result.out_9).toLocaleString('en-US'));
    }
    else if (selectedNumber === 36){
      setPrePayment(parseInt(result.out_10).toLocaleString('en-US'));
      setMonthlyPayment(parseInt(result.out_11).toLocaleString('en-US'));
      setFinalPrice(parseInt(result.out_12).toLocaleString('en-US'));
    }
  }
  
  function handelSelectedNumber(number) {
    setSelectedNumber(number);
  }

  function handleSliderValue(value){
    const number = Number(value);
    const localValue = number.toLocaleString('en-US');
    setSliderValue(localValue);
    sendSliderValueToPHP(number);
  } 

  useEffect(() => {
    if (selectedNumber && selectedNumber !== 12) {
      handleResult(result);
    }
  }, [selectedNumber]);

  return (
    <div className="flex flex-col items-center justify-center w-[80%] h-auto mx-auto bg-gray-100 py-10">
      <div className="flex flex-col gap-3 w-[50%] h-full pt-3">
        <span className="rtl">مدت بازپرداخت مورد نظر خود را انتخاب کنید</span>
       <Grid onSelectNumber={handelSelectedNumber} change={selectedNumber}/>
      </div>
      <div className="flex flex-row-reverse w-full justify-center h-16 ">
        <div className="flex flex-col justify-center items-center px-8">
          <span>قیمت</span>
          {sliderValue}
        </div>
      </div>
      
      <div className="w-full flex flex-col justify-center items-center pt-10">
      
        <Slider sliderValue={handleSliderValue} />
      </div>

      <div className="flex flex-col border border-gray-400 rounded-xl w-[50%] h-auto">
        <InfoCards valueName={"تومان"} valueNumber={prePayment} description={":مبلغ پیش پرداخت"} />
        <InfoCards valueName={"ماهه"} valueNumber={selectedNumber} description={":دوره بازپرداخت"} color={{backgroundColor: cardBgColor}}/>
        <InfoCards valueName={"تومان"} valueNumber={monthlyPayment} description={":اقساط ماهیانه"}/>
        <InfoCards valueName={"تومان"} valueNumber={finalPrice} description={":مجموع اقساط"} color={{backgroundColor: cardBgColor}}/>
      </div>
    </div>
  );
}

export default App;
