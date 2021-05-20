import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Global } from "./theme/global";
function App() {
  return (
    <div className="App">
      <Global />
      <Header />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
