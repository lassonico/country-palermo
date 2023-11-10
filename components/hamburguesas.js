"use client"
import Image from 'next/image';
import { useState } from 'react'
import { formatoMoneda } from '../helpers';
import Modal from './Modal';
// import useContry from '../hooks/useCountry';

function Hamburguesas({burger}) {

    const [ modal, setModal ] = useState(false);
    const { nombre, precio, descripcion, imagen } = burger;

    const handleShangeModal = () => {
        setModal(!modal)
    }

    const cerrar = ()=> {
        setModal(false)
    }
  return (
    <div
        className="rounded-lg px-2 py-3 h-auto mb-3 mx-auto w-[100%]"
    > 
        { modal && (
            <Modal burger={burger} cerrar={cerrar} />
        ) }
        <Image 
            width={300}
            height={200}
            src={`/assets/burgers/${imagen}.jpg`}
            alt={`imagen de ${nombre}`}
            className="block rounded-md mb-2 mx-auto"
            priority={false}
        />
        <div className='w-full flex flex-col items-start border-[#EEB81D] border-b-[1px]'>
            <h2 className='text-white text-2xl text-left font-black sombra mb-2' >{nombre}</h2>
        </div>
        <p className='sombra text-[#EEB81D] text-xl text-left font-black mt-2'>{formatoMoneda(precio)}</p>
        <p className='text-sm text-white mt-2 cortar'>{descripcion}</p>
        <button
            type='button'
            onClick={ () => handleShangeModal() }
            className='bg-[#EEB81D] shadow-sm shadow-slate-900 p-1 block mx-auto mt-3 w-full rounded text-white text-lg'>Ver
        </button>
    </div>
  )
}

export default Hamburguesas