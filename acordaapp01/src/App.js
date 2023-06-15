import './App.css';
import './comp_css/SubSection1.css'
import Headline from './components/Headline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Reference from './components/Reference';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main className>
        <Headline/>
      </main>
      <section>
        <Reference/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
