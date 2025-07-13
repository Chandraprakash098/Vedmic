import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with TechNova Solutions for your software development needs."
    >
      <div className=" pt-16 pb-12">
        
        <ContactForm />
      </div>
    </Layout>
  );
}
