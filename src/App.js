import "./App.css";
import Header from "./Components/Header";
import DisplayImages from "./Components/DisplayImages";
import AboutSection from "./Components/AboutSection";
import CreatedBy from "./Components/CreatedBy";
function App() {
  return (
    <div className="app">
      <Header />
      <DisplayImages/>
      <AboutSection/>
      <CreatedBy/>
    </div>
  );
}

export default App;
