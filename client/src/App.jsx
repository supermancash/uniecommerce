import {useEffect} from 'react';
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
        <ProductCard/>
      </body>
    </div>
  );
}

export default App;
