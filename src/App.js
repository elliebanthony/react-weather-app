import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Today's Forecast</h1>
        <Weather />
        <br />
        <div id="forecast"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
