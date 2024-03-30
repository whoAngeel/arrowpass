import React from "react";

export default function TicketFace({ hora, origen, destino }) {
  return (
    <a href="#" className="m-5">
      <div className="bg-[#F66C62] w-[137px] h-[189px] rounded-md text-white p-2">
        <img src="../../../public/primera-plus.png" className="h-[20%]" />
        <p className="text-xl">{origen}</p>
        <p className="text-xl">{destino}</p>
        <p className="text-5xl">{hora}</p>
      </div>
    </a>
  );
}
