import ArticleCard from './ArticleCard/ArticleCard';
import YourArticles from './_data/your-articles.json'
import MissedArticles from './_data/missed-articles.json'

function App() {
  const yourArticles = YourArticles.map((article, index) => {
    return (
      <li key={index}>
        <ArticleCard
          article={article}
        />
      </li>
    )
  });
}

export default App;
