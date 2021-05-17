import Header from './components/Header'
import Todos from './components/Todos';
import "./style.css"

function App() {
  return (
    <>
      <div className="outer-container">
        <div className="container">
          <Header />
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
