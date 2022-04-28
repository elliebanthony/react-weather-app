import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Today's Forecast</h1>
        <Weather />
        <br />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
