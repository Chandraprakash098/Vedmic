import Header from './Header';
import Footer from './Footer';
import SEO from './Seo';

export default function Layout({ children, title, description }) {
  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}