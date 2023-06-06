import './App.css';
import Hero from './component/Hero';
import Programs from './programs/Programs';
import Resonse from './Reasons/Resonse';
import Plans from './Plans/Plans';
import Testimouts from './Testimouts/Testimouts';
import Ready from './Ready/Ready'
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
    <Hero />
    <Programs />
    <Resonse />
    <Plans />
    <Testimouts />
    <Ready />
    <Footer />
    </div>
  );
}

export default App;
