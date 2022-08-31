import "./Assets/Styles/AppStyles/App.css"
import Hero from "./Layouts/Hero";
import Features from "./Layouts/Features";



function App() {
  return (
    <main className="App">
      <Hero />
      <Features
        instance={0}
      />
      <Features
        instance={1}
      />
    </main>
  );
}

export default App;
