const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p style={{lineHeight:3}}>I am passionate about Front-end development, Back-end development.</p>
      <p style={{lineHeight:3}}>
        I have a wide range of knowledge and skills. My goal is to continue to
        learn and master new technologies while utilizing my existing skills in
        a positive team-oriented work environment that rewards hard work and
        commitment.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {title: "About"},
  };
}

export default AboutPage;
