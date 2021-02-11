import {useState, useEffect} from 'react';
import {MainLayout} from "../../components/MainLayout";
import Link from "next/link";
import {useRouter} from "next/router";
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/Post";

interface PostPageProps {
  post: MyPost
}

export default function Post({post: serverPost} : PostPageProps) {
  const router = useRouter();
  const [post, setPost] = useState(serverPost);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
      const data = await response.json();
      setPost(data)
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return <MainLayout>
      <p>
        Loading...
      </p>
    </MainLayout>
  }

  return (
    <MainLayout title='Post'>
      <h2>Title: {post.title}</h2>
      <hr/>
      <p>{post.body}</p>
      <button>

        <Link href={'/posts'}><a>Back to all posts</a></Link>
      </button>
    </MainLayout>
  )
}


interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
  if (!req) {
    return {post: null}
  }

  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post = await response.json();

  return {post}
};