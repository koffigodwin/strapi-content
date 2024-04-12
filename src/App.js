
import './index.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Sidbar from './Sidbar';
import Submenu from './Submenu';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Sidbar />
      <Submenu />
    </div>
  );
}

export default App;
