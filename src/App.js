import Menu from "./menu/Menu.jsx"
import Content from "./content/content/content.jsx"
import AboutUs from "./content/aboutUs/aboutUs.jsx"
import AcceptBox from "./content/accept-box/acceptBox.jsx"
import "./style/_index.scss"
function App() {
  return (
    <div className="App">
      <Menu />
      <Content />
      <AboutUs />
      <AcceptBox />
    </div>
  );
}

export default App;
