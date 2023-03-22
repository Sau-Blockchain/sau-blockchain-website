
import Navbar from "./layout/Navbar.js"
import CryptoDonate from "./components/Donate.js"
import MyEditor from "./components/Wyswyg.js"





function App() {
  return (
    <div className="App">
      <Navbar/>
      <CryptoDonate/>
      <MyEditor/>
    </div>
  );
}

export default App;
