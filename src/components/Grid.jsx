import React from 'react';

const Grid = ({onSelectNumber }) => {
  let number ;


  function handleButtonClick(event) {
    const spanElement = event.currentTarget.querySelector('.installment-number');
    number =spanElement.textContent ;
    const selectedNumber = parseInt(number);
    onSelectNumber(selectedNumber);
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

  
  return (
    <div className="grid grid-rows-1 w-full grid-cols-4 rtl gap-[1vw]">
      <div className="box-border h-[3vw] rounded-[1vw] border-2 border-gray-300 border-solid p-[10px] text-center flex items-center justify-center installment-button opacity-40 clicked title">
        <span className="installment-number">12</span> ماهه
      </div>
      <div className="box-border rounded-[1vw] border-2 flex justify-center items-center border-gray-300  border-solid p-[10px] text-center installment-button opacity-40 h-[3vw] title">
        <span className="installment-number">18</span> ماهه
      </div>
      <div className="box-border rounded-[1vw] border-2 flex justify-center items-center border-gray-300  border-solid p-[10px] text-center installment-button opacity-40 h-[3vw] title">
        <span className="installment-number">24</span> ماهه
      </div>
      <div className="box-border rounded-[1vw] border-2 flex justify-center items-center border-gray-300  border-solid p-[10px] text-center installment-button opacity-40 h-[3vw] title">
        <span className="installment-number">36</span> ماهه
      </div>
    </div>
  );
};

export default Grid;
