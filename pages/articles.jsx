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
      cover_image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fperson-wearing-red-hoodie-black-background-costume-dark-eerie-wallpaper-arfcc&psig=AOvVaw3GkXD7h8GZpUUJ0ojaphBd&ust=1682368935406000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiFvOjuwP4CFQAAAAAdAAAAABAJ",
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
