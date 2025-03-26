import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import HomePage from './components/Page/HomePage';
import AboutPage from './components/Page/AboutPage';


function App() {
  return (
    <div style = {{height:"100vh"}} className="App">
      <header className="App-header">
        <h3>HomeWork 4</h3>
      </header>
      <div className="content" >
        <BrowserRouter>
          <nav>
          <NavLink className='navlink' to="/">Главная</NavLink>
          <NavLink className='navlink' to="/about">О нас</NavLink>
          </nav>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <footer className="App-footer">
        <h3>Footer</h3>
        
      </footer>
    </div>
  );
}

export default App;
