import Head from "next/head"
import { Navbar } from '../ui';

interface Props{
  children: React.ReactNode,
  title?:string
}


export const Layout = ({children, title}:Props) => {
return (
      <>
          <Head>
              <title>{title || "Pokemon App"}</title>
              <meta name="author" content="Alex Flores" />
              <meta name="description" content={`Informacion de un pokemon ${title}`} />
              <meta name="keywords" content={`${title}, pokemon, pokedex`} />
          </Head>
          <Navbar />
          <main style={{
            padding:"0px 20px"
          }}>
            {children}
          </main>
      </>
    )

}
