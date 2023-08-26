'use client'
import { Fragment, useState } from 'react'
import { productos } from '../db/burgers.js'
import { formatoMoneda } from '../../helpers'
import Seccion from '../../components/seccion.js'
import Modal from '../../components/modal.js'

import Link from 'next/link'
import Image from 'next/image'
import Footer from '../../components/footer.js'

export default function Home() {

  const [ modalp, setModalp] = useState(false);

  const year = new Date().getFullYear();

  const telefono = "573114662581";

  function pedir(producto){
    console.log('clicaste en pedir')
    const mensaje = `Hola quiero pedir una ${producto}`
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");

  }
  
  return (

    <>
        <Seccion pedir={pedir} />

        <h2 className='text-7xl text-left font-black mx-2 mt-16 leading-[.7] sombra mb-10 text-white'><span className='text-[#EEB81D] text-8xl leading-[.7]'>O</span> elige la que se <span className='text-[#EEB81D]'>te antoje</span>!</h2>
        <div className='pantalla'>
          {productos.map(producto => (
              <div
                key={producto.id}
                className="rounded-lg bg-black bg-opacity-50 shadow-lg shadow-slate-900 p-4 block w-[96%] h-auto mb-3 mx-auto"
            >
              <Image 
                width={200}
                height={200}
                src={`/assets/burgers/${producto.imagen}.png`}
                alt={`imagen de ${producto.nombre}`}
                className="block rounded-md w-auto mb-2 mx-auto"
                priority={false}
              />
              <div className='w-full flex flex-col items-start border-[#EEB81D] border-b-[1px]'>
                <h2 className='text-white text-2xl text-left font-black sombra mb-2' >{producto.nombre}</h2>
              </div>
              <p className='sombra text-[#EEB81D] text-xl text-left font-black mt-2'>{formatoMoneda(producto.precio)}</p>
              <p className='text-sm text-white mt-2 cortar'>{producto.descripcion}</p>
              <button
                type='button'
                onClick={ () => ( pedir(producto.nombre)) }
                className='bg-[#EEB81D] shadow-sm shadow-slate-700 p-1 block mx-auto mt-3 w-[80%] rounded-full text-white font-semibold text-lg'>Pedir</button>
            </div>)
          )}
        </div>
      <Image
        width={100}
        height={100}
        src='assets/logo/LogoCountryBurger.svg'
        alt='Logotipo empresarial'
        className='w-[30%] block my-[5rem] mx-auto'
      />
      <Footer year={year} />
      
    </>
  )
}
