// import logo from '././assets/trustCDRLogo.jpg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;