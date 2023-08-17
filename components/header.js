import Image from "next/image"

function Header() {
  return (
    <div className="contenedor">
        <img
            src={"/assets/logo/texto.svg"}
            className="texto"
        />
        <Image
            width={250}
            height={250}
            src={"/assets/burger/Country.png"}
            alt="Imgen de hamburguesa"
            className="block mx-auto mt-5 brightness-50"
        />
        <h2 className="country">Country</h2>
        <h3 className="precio">$16.900</h3>
        <h3 className="domicilio">Domicilio gratis</h3>
    </div>  
  )
}

export default Header