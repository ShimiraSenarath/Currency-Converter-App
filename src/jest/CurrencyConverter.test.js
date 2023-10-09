import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import CurrencyConverter from '../component/CurrencyConverter';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { fetchExchangeRate, fetchHistoricalRates } from '../redux/actions/currencyActions';


jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));


jest.mock('../redux/actions/currencyActions', () => ({
  fetchExchangeRate: jest.fn(),
  fetchHistoricalRates: jest.fn(),
}));

describe('CurrencyConverter', () => {
  let store;

  beforeEach(() => {
    const mockStore = configureStore([]);
    store = mockStore({
      exchangeRate: null,
    });
    useSelector.mockImplementation((selector) => selector(store.getState()));
    useDispatch.mockReturnValue(store.dispatch);
  });

  it('renders the component with initial values', () => {
     render(
      <Provider store={store}>
        <CurrencyConverter />
      </Provider>
    );

    expect(screen.getByText('Currency Convert')).toBeInTheDocument();
  });

  it('handles currency conversion when the "View Graph" button is clicked', async () => {
     render(
      <Provider store={store}>
        <CurrencyConverter />
      </Provider>
    );


    fireEvent.change(screen.getByLabelText('Base Currency'), { target: { value: 'USD' } });
    fireEvent.change(screen.getByLabelText('Target Currency'), { target: { value: 'EUR' } });


    fetchExchangeRate.mockResolvedValueOnce();
    fetchHistoricalRates.mockResolvedValueOnce();

    fireEvent.click(screen.getByText('View Graph'));

    await waitFor(() => {
      expect(fetchExchangeRate).toHaveBeenCalledWith('USD', 'EUR');
    });

    await waitFor(() => {
        expect(fetchHistoricalRates).toHaveBeenCalledWith('USD', 'EUR', '7days');
      });

  });
});
