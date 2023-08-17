import Link from "next/link"

function Footer() {
  return (
    <div>
        <p className="texto-footer">Todos los derechos reservado &copy;Country Burger Palermo</p>
        <p className="texto-dev">Desarrollado por {' '} 
        <Link
          className="text-indigo-500 font-black"
          href='https://soynico.netlify.app/'
          target="_blanck"
        >soynico.click</Link></p>
    </div>
  )
}

export default Footer