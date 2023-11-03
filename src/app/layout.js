'use client'
import './globals.css'
import { Countryprovider } from '../../context/Countryprovider'
import { ToastContainer } from 'react-toastify'
import Pasos from '../../components/Pasos'
import 'react-toastify/dist/ReactToastify.css'
import Hero from '../../components/Hero'

export const metadata = {
  title: 'Country burger',
  description: 'Las mejores hamburguesas de Palermo',
  themeColor: '#141414',
  manifest: '/manifest.webmanifest',
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
}

// #EEB81D amarillo #141414 negro

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
      <body className="backgroundpage font-body mx-auto md:hidden" translate='no'>
        <ToastContainer theme='colored' />
        <Countryprovider>
          <Hero />
          <Pasos />
          {children}
        </Countryprovider>
      </body>
    </html>
  )
}
