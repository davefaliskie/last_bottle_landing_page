import { useRouter } from 'next/router';
import Head from 'next/head';
import metaConfig from '@/utils/metaConfig';

const DynamicMeta = () => {
  const router = useRouter();
  const currentMeta = metaConfig[router.pathname] || metaConfig.default;

  return (
    <Head>
      {/* PRIMARY META */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="icon" href="/favicon.ico" />

      <title>{currentMeta.title}</title>
      <meta name="title" content={currentMeta.title} />
      <meta name="description" content={currentMeta.description} />

      {/*  Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={currentMeta.title} />
      <meta property="og:description" content={currentMeta.description} />
      <meta property="og:image" content={currentMeta.image} />

      {/*  Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={currentMeta.title} />
      <meta property="twitter:description" content={currentMeta.description} />
      <meta property="twitter:image" content={currentMeta.image} />

    </Head>
  );
};

export default DynamicMeta;
