"use client"
import Link from "next/link";
import useContry from "../hooks/useCountry";

const pasos = [
    { 
        paso: 1, 
        nombre: 'Menu', 
        url: '/',
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-category-2" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14 4h6v6h-6z" />
            <path d="M4 14h6v6h-6z" />
            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            </svg>
    },
    { 
        paso: 2, 
        nombre: 'Resumen', 
        url: '/resumen', 
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart relative" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
            </svg>
    }
    // { 
    //     paso: 3,
    //     nombre: 'Total',
    //     url: '/total',
    //     icon: 
    //         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-premium-rights" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    //         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    //         <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    //         <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75" />
    //         <path d="M12 7v2" />
    //         <path d="M12 15v2" />
    //         </svg>
    // }
]

function Pasos() {

    const { orden } = useContry();

  return (
    <>
    <div className="flex justify-evenly items-center fixed bottom-0 left-0 w-full h-auto py-2 bg-[#141414]">
        
        {pasos.map( paso => (
            <Link
                href={paso.url}
                className="flex items-center gap-1 text-white text-md py-1 px-5 relative"
                key={paso.paso}>
                {paso.icon}
                { paso.paso === 2 && orden.length > 0 ? <small className="bg-[tomato] rounded-full m-0 leading-none py-1 px-2 text-white text-center absolute top-0 right-2">{orden.length}</small> : '' }
            </Link>
        ))}
    </div>
    </>
  )
}

export default Pasos