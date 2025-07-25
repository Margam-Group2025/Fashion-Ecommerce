import React from "react";


export default function FashionShowCase() {
  return (
     
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:h-[500px]">
    <div
    className="col-span-2 bg-cover bg-center rounded-2xl text-white px-8 py-12
               flex flex-col justify-between h-full"
    style={{ backgroundImage: "url('/Banner/Banner1.jpeg')" }}
  >
    <div>
      <h2 className="text-4xl font-bold mb-4">Grace in Every Drape</h2>
      <p className="mb-2 text-lg">
        Flat <span className="bg-orange-500 px-2 py-1 rounded font-bold">40% OFF</span> on premium Sarees
      </p>
    </div>
    
  </div>

  {/* RIGHT: Vertical Swiper */}
  <div className="h-full flex flex-col gap-4">
    <div className="flex-1">
      <div
        className="h-full bg-cover bg-center rounded-2xl p-6 flex flex-col justify-between"
        style={{ backgroundImage: "url('/Banner/Banner2.jpg')" }}
      >
        <div>
          <h3 className="text-sm uppercase">GIRLS’ KURTA SETS</h3>
          <p className="text-2xl font-bold">Festive Looks, 30% OFF</p>
        </div>
        
      </div>
    </div>

    <div className="flex-1">
      <div
        className="h-full bg-cover bg-center rounded-2xl p-6 flex flex-col justify-between"
        style={{ backgroundImage: "url('/Banner/Banner3.jpeg')" }}
      >
        <div>
          <h3 className="text-sm uppercase">KIDS’ WEAR</h3>
          <p className="text-2xl font-bold">Playful Styles, Up to 25% OFF</p>
        </div>
        
      </div>
    </div>
  </div>
</div>

  );
}
