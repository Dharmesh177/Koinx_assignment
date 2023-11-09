import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing_Page from './components/landing-page/Landing_Page';
import BottomCard from './components/bottom-card/BottomCard';

function App() {
  return (
    <div className="App">
    <Header/>
    <Landing_Page/>
    <BottomCard/>
    <Footer/>
    </div>
  );
}

export default App;
