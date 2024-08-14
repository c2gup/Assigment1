import React from 'react';

function Button({ variant }) {
  const buttonStyles = "inline-flex items-center  items-center justify-center  w-[340px] h-[40px]  rounded-md px-2 py-2 text-sm font-semibold text-black";

  const buttonVariants = {
    primary: "bg-[#FFCE22] hover:bg-[#FFD84D]",
    secondary: "bg-[#FFD84D] hover:bg-[#FFD84D]",
    third:"bg-[#FFCE22]  hover:bg-[#FFD84D]"
  };

  return (
    <div className='flex  items-center justify-center'>
      <button
        type="button"
        className={`${buttonStyles} ${buttonVariants[variant]}`}
      >
        Done
      </button>
    </div>
  );
}

export default Button;
