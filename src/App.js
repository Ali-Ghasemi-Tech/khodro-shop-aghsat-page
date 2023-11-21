import Grid from "./components/Grid";
import Slider from "./components/Slider";

function App({installmentDuration}) {
  return (
    <div className="flex flex-col justify-center w-[80%] h-auto mx-auto bg-gray-100">
      <div className="flex flex-col gap-3 w-[80%] h-full pt-3">
        <span className="rtl">مدت بازپرداخت مورد نظر خود را انتخاب کنید</span>
       <Grid/>
      </div>
      <div>
        <Slider/>
      </div>
    </div>
  );
}

export default App;
