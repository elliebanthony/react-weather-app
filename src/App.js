import "./App.css";
import Footer from "./Footer";
import Current from "./Current";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Today's Forecast</h1>
        <Search />
        <br />
        <h2 id="location">Williamson, NY</h2>
        <Current />
        <br />
        <div id="forecast"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
