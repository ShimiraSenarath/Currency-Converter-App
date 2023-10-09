import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { fetchExchangeRate, fetchHistoricalRates } from '../redux/actions/currencyActions';
import ExchangeRateGraph from './ExchangeRateGraph';
import HistoricalRatesTable from './HistoricalRatesTable';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


function CurrencyConverter(exchangeRate) {
    const dispatch = useDispatch();
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [targetCurrency, setTargetCurrency] = useState('EUR');
    const [selectedFilter, setSelectedFilter] = useState('7days');

    const exchangeRates = useSelector((state) => state.exchangeRate);
    console.log(exchangeRates, 'exchangeRates');
  
    const handleConvert = () => {
        console.log("handleConvert work")
      dispatch(fetchExchangeRate(baseCurrency, targetCurrency));
      dispatch(fetchHistoricalRates(baseCurrency, targetCurrency, selectedFilter));
    };

    useEffect(() => {

        dispatch(fetchExchangeRate(baseCurrency, targetCurrency));
        dispatch(fetchHistoricalRates(baseCurrency, targetCurrency, selectedFilter));

      }, [baseCurrency, targetCurrency, selectedFilter, dispatch]);

    // List of predefined currencies
  const currencies = [
    'USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD',
  ];
  
    return (
      <div className='container'>
        <h2>Currency Convert</h2>

        {exchangeRate !== null ? (
            <div className='live-currency-value'>
                <span className='baseCurrency-wrapper'>
                    <p>1</p>{baseCurrency} <p>equals</p>
                </span> 
                <span className='targetCurrency-wrapper'>{exchangeRates} {targetCurrency}</span> 
            </div>
        ): (<>
            <CircularProgress />
        </>)}
        
        <div className='currency-wrapper'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Base Currency</InputLabel>
                <Select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
                    {currencies.map((currency) => (
                        <MenuItem  key={currency} value={currency}>
                            {currency}
                        </MenuItem >
                    ))}
                </Select>
                    
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Target Currency</InputLabel>
                <Select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
                    {currencies.map((currency) => (
                        <MenuItem  key={currency} value={currency}>
                            {currency}
                        </MenuItem >
                    ))}
                </Select>
            </FormControl>
            
        </div>
        <div className='filter-wrapper'>
            <FormControl fullWidth>
                <Select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
                <MenuItem value="7days">7 days</MenuItem>
                <MenuItem value="1month">1 month</MenuItem>
                <MenuItem value="6months">6 months</MenuItem>
                </Select>
            </FormControl>
            <Button  variant="outlined" onClick={handleConvert}>View Graph</Button>
        </div>
        
        
        <ExchangeRateGraph baseCurrency={baseCurrency} targetCurrency={targetCurrency} />
        <HistoricalRatesTable baseCurrency={baseCurrency} targetCurrency={targetCurrency} />
      </div>
    );
  }
  
  export default CurrencyConverter;