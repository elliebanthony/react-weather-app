import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1 className="card-header">Today's Forecast</h1>
          <Weather />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
