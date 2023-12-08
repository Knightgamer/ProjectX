import "./App.css";
import Header from "./containers/header/Header.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
