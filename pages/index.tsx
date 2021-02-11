import Link from "next/link";
import Head from "next/head";
import {MainLayout} from "../components/MainLayout";


export default function Index() {
  return (
    <MainLayout title='Home'>
      <h1>Post list with Next js</h1>
      <p><Link href='/about'><a>About</a></Link></p>
      <p><Link href='/posts'><a>Posts</a></Link></p>
      <p>Posts data will be fetched from api</p>
    </MainLayout>
  )
}
