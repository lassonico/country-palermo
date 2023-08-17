import { productos } from '../db/burgers.js'
import { formatoMoneda } from '../../helpers'

import Link from 'next/link'
import Image from 'next/image'
import Footer from '../../components/footer.js'

export default function Home() {

  const mensaje = "*Hola* Quiero pedir la Gigante! la Minnestota!"
  const telefono = "573114662581";

  function pedir(){
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    boton.addEventListener('click', () => {
    window.open(url, "_blank");
})
  }
  
  return (
    <>
        <Image
          width={700}
          height={600}
          src='/assets/comercial/banner.jpg'
          alt='Imegen promocion'
          className='w-[90%] mx-auto block mt-[10rem] rounded-md shadow-gray-800 shadow-lg hover:brightness-50'
        />
        <h2 className='text-7xl text-left font-black mx-2 mt-7 mb-0 text-white'>¡Elige la que se <span className='text-[#EEB81D]'>te antoje</span>!</h2>
        <div className='pantalla'>
        {productos.map(producto => (
          <>
          <Link key={producto.id} className=" shadow-md shadow-slate-800 rounded-lg block relative w-full mb-3"
            href={`https://wa.me/${telefono}?text=${encodeURIComponent(
              `Hola, me interesa pedir a domicilio una hamburguesa ${producto.nombre}`
              )}`}
            target="_blank"
          > 
            <div className='absolute top-1 left-2 z-10 w-auto'>
              <h2 className='text-white text-5xl font-burger sombra' >{producto.nombre}</h2>
              <p className='sombra text-[#EEB81D] text-5xl font-black'>{formatoMoneda(producto.precio)}</p>
            </div>
            <Image 
              width={400}
              height={350}
              src={`/assets/burgers/${producto.imagen}.jpg`}
              alt={`imagen de ${producto.nombre}`}
              className="block rounded-md mx-auto hover:brightness-50 ease-in-out duration-300 w-full"
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
