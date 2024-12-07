import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Jobs />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
