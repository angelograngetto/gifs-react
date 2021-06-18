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
      </div>
    </StaticContext.Provider>
  );
}

export default App;
