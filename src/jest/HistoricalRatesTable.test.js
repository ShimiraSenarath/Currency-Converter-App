import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HistoricalRatesTable from '../component/HistoricalRatesTable';

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

describe('HistoricalRatesTable', () => {
  it('renders the component with data', () => {
    render(
      <HistoricalRatesTable
        historicalRates={historicalRatesData}
        baseCurrency="USD"
        targetCurrency="EUR"
      />
    );

    const tableTitle = screen.getByText('Historical Rates Table');
    expect(tableTitle).toBeInTheDocument();


  });

  it('handles sorting when the header is clicked', () => {
    render(
      <HistoricalRatesTable
        historicalRates={historicalRatesData}
        baseCurrency="USD"
        targetCurrency="EUR"
      />
    );

    const header = screen.getByText('EUR Value');
    fireEvent.click(header);


    const firstRow = screen.getAllByRole('row')[1]; 
    const firstRowValue = screen.getByText('3.67306');
    expect(firstRow).toHaveTextContent('2022-01-01T23:59:59Z');
    expect(firstRowValue).toHaveTextContent('3.67306');
  });
});
