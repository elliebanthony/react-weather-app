import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="card-header">Today's Forecast</h1>
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
