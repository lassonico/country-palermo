'use client'
import useContry from "../../../hooks/useCountry";
import ResumenProducto from "../../../components/ResumenProducto";
import { formatoMoneda } from '../../../helpers'
import Link from "next/link";

function Page() {

  const { orden, total } = useContry()

  return (
    <div>
      <h3 className="text-4xl mt-[5rem] font-black text-white text-center">Resumen de tu pedido</h3>
      <p className='text-white mt-5 text-center text-xl'>Revisa tu pedido</p>
      <div className="mt-10">
        {orden.length === 0 ? (
          <p className="text-center text-white text-2xl">Aún no has agregado delicias a tu pedido</p>
        ) : (
          <div>{orden.map( burger => (
            <ResumenProducto 
              key={burger.id}
              burger={burger}
            />
          ) )}</div>
        )}
      </div>
      <h2 className="text-4xl text-white font-bold mt-10">Total orden</h2>
      <h3 className="text-5xl text-[#EEB81D] font-black mt-5">{formatoMoneda(total)}</h3>
      { !orden.length <= 0 ? 
        (<Link
          href="/total"
          className="bg-[#EEB81D] mt-5 block w-full mb-[5rem] py-3 px-5 border-none text-center text-white text-xl uppercase">Finalizar Pedido
        </Link>) : ''}
    </div>
  )
}

export default Page