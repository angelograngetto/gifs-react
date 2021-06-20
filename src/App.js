import {Redirect,Switch, Route} from 'wouter'
import './App.css';
import Home from './pages/Home/index'
import Detail from './pages/Detail/index'
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';
import notFound from 'pages/404';

function App() {


  return (
    <StaticContext.Provider value={
      {name: 'midudev', suscribeteAlCanal: true}
    }>
      <div className="App">
        <div className="logo">
          <h1>RIFS</h1>
          <p>The react gifs application :D</p>
        </div>
        <section className="App-content">
          <GifsContextProvider>
            <Switch>
            <Route 
              path="/" 
              component={Home}
            />
            <Route 
              path="/search/:keyword" 
              component={SearchResults}
            />
            <Route 
              path="/gif/:id" 
              component={Detail}
            />
            <Route
              path="/404"
              component={notFound}
            />
            <Route> <Redirect to="/404"/> </Route>
          </Switch>
          </GifsContextProvider>
        </section>
        <footer>
          <p>Made by <a target="_blank" rel="noreferrer" href="https://angelograngetto.com.ar">Angelo Grangetto</a> with <a target="_blank" rel="noreferrer" href="https://giphy.com">Giphy API</a> - See the code on <a target="_blank" rel="noreferrer" href="https://github.com/angelograngetto/gifs-react">GitHub</a></p>
        </footer>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
