import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mohamed Alaa is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
      />
      <meta property="og:title" content="Mohamed Alaa Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="Screenshot 2023-04-23 232949.png" />
      <meta property="og:url" content="----"/>
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mohamed Alaa',
};
