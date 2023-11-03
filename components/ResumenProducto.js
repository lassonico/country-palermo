import Image from "next/image"
import { useState } from "react";
import { formatoMoneda } from '../helpers/index'
import useContry from "../hooks/useCountry"
import Modal from "./Modal";

function ResumenProducto({burger}) {

  const { editarCantidad, orden, hanleEliminarBurger } = useContry();
  const [ modal, setModal ] = useState();

  const cerra = () =>{
    setModal(!modal)
  }
  console.log(orden)
  return (
    <>
      {modal && (
        <Modal burger={burger} cerrar={cerra} />
      )}
      <div className="flex items-center justify-start mb-2 p-0 relative overflow-hidden container">
          <svg
            onClick={() => hanleEliminarBurger(burger.id)}
            xmlns="http://www.w3.org/2000/svg" className="bg-[#0008] p-1 rounded-full absolute top-1 left-1 icon icon-tabler icon-tabler-trash" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
          <Image
              width={150}
              height={210}
              alt={`Imagen de hamburguesa ${burger.nombre}`}
              className="mr-3"
              src={`/assets/burgers/${burger.imagen}.jpg`}
          />
          <div>
              <div className="flex items-center justify-between">
                <h2 className="text-lg text-white text-left m-0">{burger.nombre}</h2>
                <span className="text-[#EEB81D] text-xl">{burger.cantidad}</span>
              </div>
              <p className="text-md text-white">Precio: {formatoMoneda(burger.precio)}</p>
              <p className="text-lg uppercase font-bold text-[#EEB81D]">Subtotal: {formatoMoneda(burger.precio * burger.cantidad)}</p>
          </div>
          <div className="w-full h-full flex items-center justify-evenly absolute bottom-[-100%] left-0 btn-conteiner">
            <button 
              onClick={() => { editarCantidad(burger.id), cerra()}}
              className="border text-white rounded block w-1/3 py-2">Editar</button>
            <button
              onClick={() => hanleEliminarBurger(burger.id)}
              className="border text-white rounded block w-1/3 py-2">Eliminar</button>
          </div>
      </div>
    </>
  )
}

export default ResumenProducto