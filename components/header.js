import Image from "next/image"

function Header() {
  return (
    <div className="contenedor">
        <Image
            width={300}
            height={600}
            src={"/assets/comercial/imgburgerHero.png"}
            alt="Imgen de hamburguesa"
            className="block mx-auto mt-5"
        />
        <Image
            width={900}
            height={900}
            src={"/assets/comercial/vegetales1.png"}
            alt="Imgen de vegetales"
            className="block imgbegetales"
        />
        <h3 className="domicilio">Pide tu Domicilio gratis</h3>
    </div>  
  )
}

export default Header