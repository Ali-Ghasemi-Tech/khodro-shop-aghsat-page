import React from 'react';
import App from '../App';

const Grid = () => {
  let number = '';

  function handleButtonClick(event) {
    const spanElement = event.currentTarget.querySelector('.installment-number');
    number = spanElement.textContent;

    console.log(number);
  }

  React.useEffect(() => {
    const installmentButtons = document.querySelectorAll('.installment-button');

    function handleClick(event) {
      installmentButtons.forEach(button => {
        button.classList.remove('clicked');
      });

      event.currentTarget.classList.add('clicked');
    }

    installmentButtons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
      button.addEventListener('click', handleClick);
    });

    return () => {
      installmentButtons.forEach(button => {
        button.removeEventListener('click', handleButtonClick);
        button.removeEventListener('click', handleClick);
      });
    };
  }, []);

  <App installmentDuration={number}/>
  return (
    <div className="grid grid-rows-2 grid-cols-4 rtl gap-5">
      <div className="box-border rounded-xl border-2 border-gray-300  border-solid p-[10px] text-center installment-button opacity-40 ">
        <span className="installment-number">6</span> ماهه
      </div>
      <div className="box-border rounded-xl border-2 border-gray-300 border-solid p-[10px] text-center installment-button opacity-40">
        <span className="installment-number">12</span> ماهه
      </div>
      <div className="box-border rounded-xl border-2 border-gray-300  border-solid p-[10px] text-center installment-button opacity-40">
        <span className="installment-number">15</span> ماهه
      </div>
      <div className="box-border rounded-xl border-2 border-gray-300  border-solid p-[10px] text-center installment-button opacity-40">
        <span className="installment-number">18</span> ماهه
      </div>
      <div className="box-border rounded-xl border-2 border-gray-300  border-solid p-[10px] text-center installment-button opacity-40">
        <span className="installment-number">24</span> ماهه
      </div>
      <div className="box-border rounded-xl border-2 border-gray-300  border-solid p-[10px] text-center installment-button opacity-40">
        <span className="installment-number">30</span> ماهه
      </div>
      <div className="box-border rounded-xl border-2 border-gray-300  border-solid p-[10px] text-center installment-button opacity-40">
        <span className="installment-number">36</span> ماهه
      </div>
    </div>
  );
};

export default Grid;
