import './App.css';
import './comp_css/SubSection1.css'
import Headline from './components/Headline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main className>
        <Headline/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
