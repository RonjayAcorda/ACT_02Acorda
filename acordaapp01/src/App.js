import './App.css';
import './comp_css/SubSection1.css'
import Headline from './components/Headline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Reference from './components/Reference';
import Contrast from './components/Contrast'
import Counter from './components/Counter'

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
      <Counter/>
      <Contrast/>
    </div>
  );
}

export default App;
