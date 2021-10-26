import './App.css';
import Articles from './component/Articles';
import PasswordCheck from './component/PasswordCheck';
import { Route, Link, Switch } from 'react-router-dom';
import ArticleData from './component/ArticleData';

function App() {
  return (
    <div>
      <div className="nav-bar">
        <div className="nav-link">
          <Link to="/articles">Articles</Link>
        </div>
        <div className="nav-link">
          <Link to="/passwordCheck">Password Check</Link>
        </div>
      </div>
      <Switch>
        <Route path="/article/details/:articleId"><ArticleData /></Route>
        <Route path="/articles"><Articles /></Route>
        <Route path="/passwordCheck"><PasswordCheck /></Route>
      </Switch>
    </div>
  );
}

export default App;
