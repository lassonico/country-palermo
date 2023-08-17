import './globals.css'
import Image from 'next/image'
import Header from '../../components/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Country burger',
  description: 'Las mejores hamburguesas de Palermo',
  themecolor: '#141414'
}

// #EEB81D amarillo

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} backgroundpage font-body mx-auto md:hidden`}>
        <div className='w-[100%] h-[70vh] md:justify-center mb-10 py-3 pb-5 gap-1 z-10'>
          <div className='flex items-center justify-center mb-10 gap-2'>
              <Image
                width={40}
                height={40}
                src={"assets/logo/logo.svg"}
                className="mb-2 block"
                alt='logotipo de la empresa'
              />
              <img
                src={"/assets/logo/texto.svg"}
                className="texto"
            />
          </div>
        <Header />
        </div>
        {children}
      </body>
    </html>
  )
}
