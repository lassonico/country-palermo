import { useState, useEffect } from 'react'
import Image from "next/image"
import { formatoMoneda } from "../helpers"
import useContry from '../hooks/useCountry';


function Modal({burger, cerrar}) {

  const { handleAgregarOrden, orden } = useContry();
  const [ cantidad, setCantidad ] = useState(1);
  const [ editar, setEditar ] = useState(false);

  useEffect(() => {
    if( orden.some((ordenstate) => ordenstate.id === burger.id )){
      const burgerEdicion = orden.find((ordenstate) => ordenstate.id === burger.id)
      setEditar(true);
      setCantidad(burgerEdicion.cantidad);
    }
  }, [burger, orden])

  // comprobar si el modal actual está en el pedido

  return (
    <>
    <div className="fixed top-0 left-0 w-screen h-full bg-[#000000c2] flex items-start justify-center z-50">
      <div className="rounded-md w-[95%] bg-black flex flex-col mt-[6rem] mx-auto relative">
        <button
          type="button"
          onClick={() => cerrar() }
          className="text-[tomato] text-2xl py-1 px-3 absolute top-3 right-5 border-none z-50 bg-white rounded-full">X
        </button>
        <div className="w-full">
        <h2 className="text-white text-center text-3xl font-black mb-3 absolute top-3 left-5 z-50 sombra">{burger.nombre}</h2>
          <Image
            width={400}
            height={200}
            className="block mx-auto w-full absolute top-0 rounded-t-lg"
            src={`/assets/burgers/${burger.imagen}.jpg`}
            alt={`producto ${burger.imagen}`}
          />
        </div>
        <div className="mx-auto relative w-full mt-[60%] p-5">
          <p className="text-white text-xl">{burger.descripcion}</p>
          <p className="text-[#EEB81D] text-center text-3xl font-bold mt-5">{formatoMoneda(burger.precio)}</p>
          <h3 className='text-center text-white text-xl my-3'>Elige la cantidad</h3>
          <div className="my-2 mx-auto flex justify-center items-center gap-5">
            <button
              onClick={ () => {
                if(cantidad <= 1 ) return;
                setCantidad( cantidad - 1)
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l14 0" />
              </svg>
            </button>
            <p className='text-white text-2xl text-center'>{ cantidad }</p>
            <button
              onClick={() => {
                if( cantidad >= 6) return;
                setCantidad( cantidad + 1);
              }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
            </button>
          </div>
          <button
            onClick={() => {handleAgregarOrden({ ...burger, cantidad}) , cerrar() } }
            className="w-full block bg-[#EEB81D] text-white p-3 rounded border-none mt-5" >{ editar ? "Guardar cambios" : "Agregar al pedido" }</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Modal;