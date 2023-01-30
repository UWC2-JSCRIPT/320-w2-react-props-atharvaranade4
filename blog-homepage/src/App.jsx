import ArticleCard from './ArticleCard/ArticleCard';
import ArticleRow from './ArticleCard/ArticleRow';
import YourArticles from './_data/your-articles.json'
import MissedArticles from './_data/missed-articles.json'
import './App.css'

function App() {
  const yourArticles = YourArticles.map((article, index) => {
    return (
      <div key={index}>
        <ArticleCard
          article={article}
          articleType='your'
        />
        </div>
    )
  });
  const missedArticles = MissedArticles.map((article, index) => {
    return (
      <div key={index}>
        <ArticleCard
          article={article}
          articleType='missed'
        />
        </div>
    )
  });

  return(
    <div className="App">
      <div className='your-articles-container'>
      <ArticleRow
        rowName='For you'
      />
        <ul>
          {yourArticles}
        </ul>
      </div>
      <ArticleRow
        rowName='In case you missed it'
      />
      <div className='missed-articles-container'>
        <ul>
          {missedArticles}
        </ul>
      </div>

    </div>
  )
}

export default App;
