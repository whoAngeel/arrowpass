import React from 'react'

export default function TicketFace({hora, origen, destino}) {
  return (
    <div className="bg-[#F66C62] w-[137px] h-[189px] rounded-md text-white p-2" >
        
        <p className='text-xl'>{origen}</p>
        <p className='text-xl'>{destino}</p>
        <p className='text-5xl'>{hora}</p>
    </div>
  )
}
