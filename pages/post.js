import Head from 'next/head'
import Link from 'next/link'
import Layout from '../comps/layout'
import style from '../comps/layout.module.css'

export default function BlogPost () {
  return (
    <Layout>
      <Head>
        <title>Blog Post</title>
      </Head>
      <h1>Go Zags!</h1>
      <Link href="/">
        <a>Home</a>
      </Link>


    </Layout>

  )
}
