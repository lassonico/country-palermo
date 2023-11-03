import Image from "next/image"

function Hero() {
  return (
    <div className='w-[100%] md:justify-center mb-10 py-3 pb-5 gap-1 z-10'>
          <div className='z-30 flex items-center justify-center mb-10 gap-2 fixed w-[100%] mx-auto top-0 left-0 py-3 bg-[#141414]'>
              <Image
                width={40}
                height={40}
                src={"assets/logo/logo.svg"}
                className="mb-2 block"
                alt='logotipo de la empresa'
              />
              <Image
                width={100}
                height={100}
                src={"/assets/logo/texto.svg"}
                className="texto"
                alt='imagen del nombre de la empresa'
            />
          </div>
        </div>
  )
}

export default Hero