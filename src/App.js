import Navbar from "./Components/navbar/Navbar";
import "./App.scss";
import Header from "./Components/Header/Header";
import Section from "./Components/section/Section";
import Section2 from "./Components/section/Section2";
import Section3 from "./Components/section/Section3";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App-wrapper">
      <Navbar />
      <Header />
      <main>
        <section className="section-wrapper">
          <Section />
          <Section2 />
          <Section3 />
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
