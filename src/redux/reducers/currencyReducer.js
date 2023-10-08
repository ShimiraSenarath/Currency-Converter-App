import { FETCH_EXCHANGE_RATE, FETCH_HISTORICAL_RATES } from '../actions/currencyActionsTypes';

const initialState = {
  exchangeRate: 0,
  historicalRates: [],
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXCHANGE_RATE:
      return { ...state, exchangeRate: action.payload };

    case FETCH_HISTORICAL_RATES:
      return { ...state, historicalRates: [action.payload, ...state.historicalRates] };

    default:
      return state;
  }
};

export default currencyReducer;
