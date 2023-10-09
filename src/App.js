import './App.css';
import './styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyConverter from './component/CurrencyConverter';

function App() {
  return (
    <div className="App">
      {/* <h2>Currency Convert</h2> */}
      <CurrencyConverter/>
      
    </div>
  );
}

export default App;
