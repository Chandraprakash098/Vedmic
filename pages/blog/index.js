import Layout from '../../components/Layout';
import BlogCard from '../../components/BlogCard';
import { getAllPosts } from '../../lib/posts';

export default function Blog({ posts }) {
  return (
    <Layout
      title="Blog - TechNova Solutions"
      description="Read our latest blog posts about software development and technology trends."
    >
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts }
  };
}