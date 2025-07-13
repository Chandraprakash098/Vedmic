import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
        Read More
      </Link>
    </div>
  );
}