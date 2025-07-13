import Layout from '../../components/Layout';
import Image from 'next/image';
import { getAllProducts, getProductBySlug } from '../../lib/products';

export default function ProductPage({ product }) {
  return (
    <Layout
      title={`${product.name} - TechNova Solutions`}
      description={product.description}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Contact Us for Demo
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);
  return {
    props: { product }
  };
}

export async function getStaticPaths() {
  const products = getAllProducts();
  const paths = products.map((product) => ({
    params: { slug: product.slug }
  }));
  return {
    paths,
    fallback: false
  };
}