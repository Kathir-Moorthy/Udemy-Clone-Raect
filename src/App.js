import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Saleimage from "./components/Saleimage";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import Popular from "./components/Popilar";
import Footer from "./components/Footer";

function App() {
  return (<div><Navbar></Navbar> <Category></Category> <Saleimage></Saleimage> <Recommended></Recommended> <Topics></Topics> <Popular></Popular> <Footer></Footer></div>)
  // Instead of using <div>...</div> we can use <>..</> which are called fragments as they are more light weight to use
}

export default App;
