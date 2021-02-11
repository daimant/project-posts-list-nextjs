import Link from "next/link";
import Head from "next/dist/next-server/lib/head";

export function MainLayout({children, title = 'Next App'}) {
  return (
    <>
      <nav>
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/about'}><a>About</a></Link>
        <Link href={'/posts'}><a>Posts</a></Link>
      </nav>
      <main>
        <Head>
          <title>{title} | Next-js app</title>
          <meta name='content' content='next,javascript,nextjs,react'/>
          <meta name='description' content='we try learn next js'/>
        </Head>
        {children}
      </main>
      <style jsx> {`
        nav {
        position: fixed;
        height: 60px;
        left: 0;
        right: 0;
        top: 0;
        background: darkblue;
        display: flex;
        justify-content: space-around;
        align-items: center; 
        }
        nav a {
        color: #fff;
        text-decoration: none;
        }
        main {
        margin-top: 60px;
        padding: 1rem;
        }
      `}
      </style>
    </>
  )
}