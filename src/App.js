import Navbar from "./layout/Navbar.js"
import CryptoDonate from "./components/Donate.js"
import MyEditor from "./components/Wyswyg.js"
import AnaSayfaSlider from './components/AnaSayfaSlider.js';
import Footer from "./layout/Footer.js";
import Team from './components/Team';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <CryptoDonate/>
      <MyEditor/>
  <AnaSayfaSlider/>
  <Team />
  <Footer/>
    </div>
  );
}

export default App;
