import "./App.css";
import Header from "./components/common/Header.jsx";
import Cart from "./components/common/Cart";
import Main from "./components/common/Main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>{1 == 2 ? <Cart></Cart> : <Main></Main>}</div>
    </div>
  );
}

export default App;
