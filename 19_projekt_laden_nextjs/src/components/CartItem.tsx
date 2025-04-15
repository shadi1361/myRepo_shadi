import Image from "next/image";

import React from "react";

function CartItem() {
  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4 ">
      <Image
        className="col-span-3 mt-4 ml-3 rounded-md"
        src="https://miro.medium.com/v2/resize:fit:660/1*IrTgE4XTR09pSjOH_jLwUQ.png"
        alt=""
        width={200}
        height={200}
      />

      <div className="col-span-7 p-3">
        <h2 className="text-xl font-bold">اسم محصول</h2>
        <p>تعداد : <span>3</span></p>
        <p>قیمت محصول :<span>450$</span></p>

        <div className="mt-4">
          <button className="px-4 py-2 rounded bg-sky-500 text-white">-</button>
          <span className="mx-4">3</span>
          <button className="px-4 py-2 rounded bg-sky-500 text-white">+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
