import { productos } from '../db/burgers.js'
import { formatoMoneda } from '../../helpers'

import Link from 'next/link'
import Image from 'next/image'
import Footer from '../../components/footer.js'

export default function Home() {

  const mensaje = "*Hola* Quiero hacer un pedido"
  const telefono = "573114662581";
  // const url = "https://wa.me/" + telefono + "?text=" ;
  // const encode = encodeURIComponent(mensaje);

  // boton.addEventListener('click', () => {
  //   window.open(url, "_blank");
  // })
  
  return (
    <>
      <div className='mx-auto flex items-center md:w-1/5 flex-wrap'>
        <img
          src='assets/comercial/banner.jpg'
          alt='Imegen promocion'
          className='w-[95%] mx-auto block my-8'
        />
        {productos.map(producto => (
          <>
          <Link key={producto.id} className=" shadow-md shadow-slate-600 rounded-lg block m-2 relative w-[46%] md:w-full"
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`}
            target="_blank"
          > 
            <div className='absolute top-1 left-2 z-10 w-auto'>
              <h2 className='text-white text-2xl font-burger' >{producto.nombre}</h2>
              <p className='text-[#EEB81D] text-2xl font-body font-black'>{formatoMoneda(producto.precio)}</p>
            </div>
            <Image 
              width={400}
              height={350}
              src={`/assets/burgers/${producto.imagen}.jpg`}
              alt={`imagen de ${producto.nombre}`}
              className="block rounded-md mx-auto brightness-75 hover:brightness-50 ease-in-out duration-300 w-auto"
              priority={false}
            />
          </Link>
          </>
        )
      )}</div>
      <img
        src='assets/logo/LogoCountryBurger.svg'
        alt='Logotipo empresarial'
        className='w-[30%] block my-[5rem] mx-auto'
      />
      <Footer />
    </>
  )
}
