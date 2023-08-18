import './globals.css'
import Image from 'next/image'
import Header from '../../components/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Country burger',
  description: 'Las mejores hamburguesas de Palermo',
  themeColor: '#141414',
  manifest: '/manifest.webmanifest'
  // favicon: '/assets/logo/logo.svg'
}

// #EEB81D amarillo

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <link
        rel="icon"
        href="/assets/logo/logo.svg"
        type="image/svg"
        sizes="<generated>"
      />
      </head>
      <body className={`${inter.className} backgroundpage font-body mx-auto md:hidden`}>
        <div className='w-[100%] h-[70vh] md:justify-center mb-10 py-3 pb-5 gap-1 z-10'>
          <div className='z-30 flex items-center justify-center mb-10 gap-2 fixed w-full mx-auto top-0 left-0 py-3 bg-[#141414]'>
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
        <Header />
        </div>
        {children}
      </body>
    </html>
  )
}
