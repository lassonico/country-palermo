'use client'
import {useEffect, useCallback} from 'react'
import useContry from '../../../hooks/useCountry';
import { formatoMoneda } from '../../../helpers'

function Page() {
  const { 
    orden,
    enviarPedido,
    total,
    nombre,
    setNombre,
    direccion,
    setDireccion,
    wpp,
    setWpp,
    pago,
    setPago
  } = useContry();

  const comprobarPedido = useCallback(() => {
    return orden.length === 0 || nombre === '' || direccion === '' || wpp === '' || pago === '';
  }, [orden, nombre, direccion, wpp, pago]);

  useEffect(() => {
    comprobarPedido();
  }, [orden, comprobarPedido]);

  return (
    <div>
      <h3 className="text-4xl mt-[5rem] font-black text-white text-center">Total de tu pedido</h3>
      <p className='text-white mt-5 text-center text-xl'>Finaliza tu pedido</p>
      <form
        className='mt-6 px-2'
        autoComplete='off'
        translate='no'
        onSubmit={enviarPedido}
      >
        <h2 className='text-3xl text-white font-black mb-5'>Total: <span className='text-[#EEB81D] text-4xl'>{formatoMoneda(total)}</span></h2>
        <div>
          <label className='text-[#EEB81D] text-xl block mb-1'>Nombre:</label>
          <input
            value={nombre}
            onChange={ e => setNombre(e.target.value)}
            type="text"
            className='bg-transparent mb-5 block outline-none border-b border-[#EEB81D] text-white text-xl font-light w-full py-3'
          />
        </div>
        <div>
          <label className='text-[#EEB81D] text-xl block mb-1'>Dirección:</label>
          <input 
            value={direccion}
            onChange={e => setDireccion(e.target.value)}
            type="text"
            className='bg-transparent mb-5 block outline-none border-b border-[#EEB81D] text-white text-xl font-light w-full py-3'
          />
        </div>
        <div>
          <label className='text-[#EEB81D] text-xl block mb-1'>WhatsApp:</label>
          <input
            value={wpp}
            onChange={e => setWpp(e.target.value)}
            type="text"
            inputMode='numeric'
            className='bg-transparent mb-5 block outline-none border-b border-[#EEB81D] text-white text-xl font-light w-full py-3'
          />
        </div>
        <div>
          <label className='text-[#EEB81D] text-xl block mb-1'>Forma de pago:</label>
          <select
            value={pago}
            onChange={e => setPago(e.target.value)}
            type="text"
            className='bg-[#141414] mb-5 block outline-none border-b border-[#EEB81D] text-white text-xl font-light w-full py-3'
          >
            <option value="efectivo">Efectivo</option>
            <option value="nequi">Nequi</option>
            <option value="daviplata">Daviplata</option>
            <option value="tarjeta">Trajeta (+ 3% )</option>
          </select>
        </div>
        <input
          type="submit"
          disabled={comprobarPedido()}
          value="Enviar pedido"
          className={`${ comprobarPedido() ? 'bg-yellow-300' : 'bg-[#EEB81D]' } py-3 px-8 text-center block w-full border-none rounded-md text-white text-xl mt-7 uppercase`}
          />
      </form>
    </div>
  )
}

export default Page