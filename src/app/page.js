import { productos } from '../db/burgers.js'
import Header from '../../components/header'
import Hamburguesas from '../../components/Hamburguesas'
import Image from 'next/image'
import Footer from '../../components/footer.js'

export default function Home() {

  const year = new Date().getFullYear();
  
  return (

    <>
      <Header />
      <h2 className='text-7xl text-left font-black mx-0 mt-16 leading-[.7] sombra mb-10 text-white'><span className='text-[#EEB81D] leading-[.7]'>E</span>lige la que se <span className='text-[#EEB81D]'>te antoje</span>!</h2>
      <div className='pantalla'>
        {productos?.map(producto => (
            <Hamburguesas key={producto.id} burger={producto}/>)
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
