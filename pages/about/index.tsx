import Router from 'next/router'
import {MainLayout} from "../../components/MainLayout";

export default function About() {
  const linkClickHandler = () => {
    Router.push('/posts')
  };

  return (
    <MainLayout title='About'>
      <h1>When i create this project i use NextJS + TypeScript</h1>
      <button onClick={linkClickHandler} style={{marginRight: '10px'}}>Go posts</button>
      <button onClick={() => Router.push('/')}>Go back to home</button>
    </MainLayout>
  )
}
