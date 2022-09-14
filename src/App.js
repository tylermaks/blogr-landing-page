import "./Assets/Styles/AppStyles/App.css"
import Hero from "./Layouts/Hero";
import Features from "./Layouts/Features";
import Banner from "./Layouts/Banner"
import Footer from "./Layouts/Footer"



function App() {
  return (
    <main className="App">
      <Hero />
      <Features
        instance={0}
      />
      <Banner />
      <Features
        instance={1}
      />
      <Footer/>
    </main>
  );
}

export default App;
