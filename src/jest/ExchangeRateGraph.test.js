import React from 'react';
import { render, screen } from '@testing-library/react';
import ExchangeRateGraph from '../component/ExchangeRateGraph';


const historicalRatesData = [
  {
    datetime: '2022-01-01T23:59:59Z',
    currencies: {
      EUR: {
        code: 'EUR',
        value: 3.67306,
      },
    },
  },
];



test("renders the component with data", ()=>{
    render(<ExchangeRateGraph 
      historicalRates={historicalRatesData}
      baseCurrency="USD"
      targetCurrency="EUR"/>);
      
      const graphTitle = screen.getByText('Exchange Rate Graph');
      expect(graphTitle).toBeInTheDocument();
})
