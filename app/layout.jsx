import Navbar from './components/Navbar'
import {
    Roboto,
} from 'next/font/google'

export const metadata = {
    title: "Mi tienda con Next.js - HomePage",
    description: "Esta es la descripción de la página de inicio",
    keywords: "tienda, online,  e-commerce",

}
export default  function RootLayout({children}) {
  return (
      <html>
      <body className={}>
      <Navbar/>
      {children}
      </body>
      </html>
  );
}