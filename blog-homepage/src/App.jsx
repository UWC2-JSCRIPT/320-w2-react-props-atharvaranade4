import ArticleCard from './ArticleCard/ArticleCard';
import ArticleRow from './ArticleCard/ArticleRow';
import YourArticles from './_data/your-articles.json'
import MissedArticles from './_data/missed-articles.json'
import './App.css'

function App() {
  const yourArticles = YourArticles.map((article, index) => {
    return (
      <div className='article-card-container' key={index}>
        <ArticleCard
          article={article}
          articleType='your'
        />
        </div>
    )
  });
  const missedArticles = MissedArticles.map((article, index) => {
    return (
      <div className='article-card-container' key={index}>
        <ArticleCard
          article={article}
          articleType='missed'
        />
        </div>
    )
  });

  return(
    <div className="App">
      <ArticleRow
        rowName='For you'
      />
      <div class="line"></div>
      <div className='your-articles-container'>
        {yourArticles}
      </div>
      <ArticleRow
        rowName='In case you missed it'
      />
      <div class="line"></div>
      <div className='missed-articles-container'>
          {missedArticles}
      </div>

    </div>
  )
}

export default App;
