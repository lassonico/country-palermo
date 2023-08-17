import './globals.css'
import Image from 'next/image'
import Header from '../../components/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Country burger',
  description: 'Las mejores hamburguesas de Palermo'
}
// #2A282B color bg
// #EEB81D amarillo

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} backgroundpage font-body mx-auto md:hidden`}>
        <div className='w-[100%] h-[70vh] md:justify-center mb-10 py-3 pb-5 gap-1 z-10'>
          <Image
            width={50}
            height={50}
            src={"assets/logo/logo.svg"}
            className="mb-5 mx-auto block"
            alt='logotipo de la empresa'
          />
        <Header />
        </div>
        {children}
      </body>
    </html>
  )
}
