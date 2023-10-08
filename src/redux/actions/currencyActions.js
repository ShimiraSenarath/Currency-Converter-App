import axios from 'axios';
import { FETCH_EXCHANGE_RATE, FETCH_HISTORICAL_RATES } from './currencyActionsTypes'


const API_KEY = 'fca_live_FI52TxSmvSB156BKcFZ8QHu6LahDjYU0kwdFh6zu'; // Sign up at https://freecurrencyapi.com/ to get your API key

export const fetchExchangeRate = (baseCurrency, targetCurrency) => async (dispatch) => {
  try {
    const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest/?apikey=${API_KEY}&${baseCurrency}/${targetCurrency}`);
    dispatch({ type: FETCH_EXCHANGE_RATE, payload: response.data.data[targetCurrency] });
    // console.log(response.data, "rate");
  } catch (error) {
    // Handle error
    console.error('Error fetching exchange rate:', error);
  }
};

export const fetchHistoricalRates = (baseCurrency, targetCurrency, filter) => async (dispatch) => {
    try {
      // Map the filter values
      const filterMapping = {
        '7days': '7days',
        '1month': '1month',
        '6months': '6months',
      };
  
      const response = await axios.get(`https://api.freecurrencyapi.com/v1/historical/?apikey=${API_KEY}&${baseCurrency}/${targetCurrency}/${filterMapping[filter]}`);
      dispatch({ type: FETCH_HISTORICAL_RATES, payload: response.data.rates });
    } catch (error) {
      // Handle error
      console.error('Error fetching historical rates:', error);
    }
  };

