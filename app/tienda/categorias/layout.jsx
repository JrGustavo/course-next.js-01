import Link from 'next/link';

export default function TiendaLayout ({children}) {
    return <>
        <nav>
            <h3>Sección tienda</h3>
            <ul>
              <li>
                  <Link href="/tienda/categorias">Categorias</Link>
              </li>
                <li>
                    <Link href="/tienda/computadoras">Computadoras</Link>
                </li>
            </ul>
             </nav>
        {children}
    </>;
}