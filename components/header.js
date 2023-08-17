import Image from "next/image"

function Header() {
  return (
    <div className="contenedor">
        <Image
            width={250}
            height={250}
            src={"/assets/burger/Minnesota.png"}
            alt="Imgen de hamburguesa"
            className="block mx-auto mt-5 brightness-50"
        />
        <h2 className="country">Minnesota</h2>
        <h3 className="precio">$21.900</h3>
        <h3 className="domicilio">Pide tu Domicilio gratis</h3>
    </div>  
  )
}

export default Header