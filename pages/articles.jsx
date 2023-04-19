import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Recent Posts from{' '}
        <a
          href="----"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {

  const data = [
    {
      id:"dsadasd",
      title:"Dsad",
      cover_image:"https://imgur.com/kbGs6zH.png",
      description:"DASdasd",
      page_views_count:"0",
      public_reactions_count:"0",
      comments_count:"0"
    },
    {
      id:"dsadasd",
      title:"Dsad",
      cover_image:"https://imgur.com/kbGs6zH.png",
      description:"DASdasd",
      page_views_count:"0",
      public_reactions_count:"0",
      comments_count:"0"
    },
    {
      id:"dsadasd",
      title:"Dsad",
      cover_image:"https://imgur.com/kbGs6zH.png",
      description:"DASdasd",
      page_views_count:"0",
      public_reactions_count:"0",
      comments_count:"0"
    },
    {
      id:"dsadasd",
      title:"Dsad",
      cover_image:"https://imgur.com/kbGs6zH.png",
      description:"DASdasd",
      page_views_count:"0",
      public_reactions_count:"0",
      comments_count:"0"
    },
    {
      id:"dsadasd",
      title:"Dsad",
      cover_image:"https://imgur.com/kbGs6zH.png",
      description:"DASdasd",
      page_views_count:"0",
      public_reactions_count:"0",
      comments_count:"0"
    },
    {
      id:"dsadasd",
      title:"Dsad",
      cover_image:"https://imgur.com/kbGs6zH.png",
      description:"DASdasd",
      page_views_count:"0",
      public_reactions_count:"0",
      comments_count:"0"
    },
  ]

  return {
    props: { title: 'Articles', articles: data },
    revalidate: 60,
  };
}

export default ArticlesPage;
