import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList'
import Article from './pages/Article';
import NavBar from './NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element= {<Home />} exact />
        <Route path='/about' element= {<About />} exact />
        <Route path='/articles' element= {<ArticlesList />} exact />
        <Route path='/article/:id' element= {<Article />} exact />
        <Route path='*' element= {<NotFound />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
