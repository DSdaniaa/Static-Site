import Head from 'next/head';
import { getPostData } from '../lib/posts';

export default function Home({ post }) {
    return (
        <div>
            <Head>
                <title>{post.data.title}</title>
                <meta name="description" content={post.data.excerpt || "A sample static site using Next.js with SEO."} />
                <meta property="og:title" content={post.data.title} />
                <meta property="og:description" content={post.data.excerpt || "A sample static site using Next.js with SEO."} />
                <meta property="og:type" content="article" />
            
            </Head>
            <h1>{post.data.title}</h1>
            <p>{post.data.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}

export async function getStaticProps() {
    const post = getPostData();
    return {
        props: {
            post,
        },
    };
}