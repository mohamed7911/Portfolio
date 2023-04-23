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
      id:"1",
      title:"No articles just yet",
      cover_image:"https://c0.wallpaperflare.com/preview/749/278/508/black-background-costume-dark-eerie.jpg",
      description:"---",
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
