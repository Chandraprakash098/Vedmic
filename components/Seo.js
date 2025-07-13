import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      {/* <title>{title} | Vedamic</title> */}
      <title>{`${title} | Vedamic`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="software, startup, technology, development, services" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/logo.png" />
    </Head>
  );
}