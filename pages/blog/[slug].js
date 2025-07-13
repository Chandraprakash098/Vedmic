import Layout from '../../components/Layout';
import { getAllPosts, getPostBySlug } from '../../lib/posts';

export default function Post({ post }) {
  return (
    <Layout
      title={`${post.title} - TechNova Solutions`}
      description={post.excerpt}
    >
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    props: { post }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));
  return {
    paths,
    fallback: false
  };
}