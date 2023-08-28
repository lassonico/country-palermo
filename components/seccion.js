import Image from "next/image"

function Seccion({pedir}) {
  return (
    <div className="separacion">
        <h3 className="text-white font-black text-7xl sombra texto-belleza">Que tal éste trío?</h3> 
        <Image
          width={700}
          height={600}
          src='/assets/comercial/banner.jpg'
          alt='Imegen promocion'
          className='w-[100%] mx-auto block mt-[2rem] shadow-black shadow-lg hover:brightness-50'
          onClick={() => (pedir('Una gigante Minnesota!'))}
        />
    </div>
  )
}

export default Seccion