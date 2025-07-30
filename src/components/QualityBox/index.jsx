import React, { useState } from 'react';

export default function QuantityBox() {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <>
      <div className="flex items-center ">
        <div className="flex items-center space-x-3 bg-gray-100 px-2 py-1 rounded-md">
          <button
            onClick={decreaseQty}
            className="text-xl font-bold px-1 py-1 rounded hover:bg-gray-200"
          >
            −
          </button>
          <span className="min-w-[20px] text-center text-lg">{quantity}</span>
          <button
            onClick={increaseQty}
            className="text-xl font-bold px-1 py-1 rounded hover:bg-gray-200"
          >
            +
          </button>
        </div>
    </div>
        </>
 
  );
}
