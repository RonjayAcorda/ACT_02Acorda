import './App.css';
import './comp_css/SubSection1.css'
import Headline from './components/Headline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Reference from './components/Reference';
import Contrast from './components/Contrast'
import Counter from './components/Counter'
import UseContext from './components/UseContext';
import UseRef from './components/UseRef';
import UseEffect from './components/UseEffect';

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
      <Counter/>{/*State*/}
      <Contrast/>{/*State*/}
      <UseContext/>{/*Hooks*/}
      <UseRef/>{/*Hooks*/}
      <UseEffect/>{/*Hooks*/}
        <br></br>
        <br></br>
    </div>
  );
}

export default App;
