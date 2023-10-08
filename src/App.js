import './App.css';
import './styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyConverter from './component/CurrencyConverter';
import ExchangeRateGraph from './component/ExchangeRateGraph';
import HistoricalRatesTable from './component/HistoricalRatesTable'

function App() {
  return (
    <div className="App">
      <CurrencyConverter/>
      <br/>
      {/* <ExchangeRateGraph/> */}
      <br/>
      {/* <HistoricalRatesTable/> */}
    </div>
  );
}

export default App;
