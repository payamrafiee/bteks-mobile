import {
  COINS_LIST,
  FETCH_COIN_DATA,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_CHART_DATA,
  FETCH_CHART_DATA_SUCCESS,
  SELECTED_COIN,
} from '../types';

import { coins, ranges } from '../helper';

const initialState = {
  price: '',
  chartPrices: null,
  currentCoin: {},
  currentRange: '',
  isLoading: false,
  isLoadingChart: false,

  listRanges: ranges,

  listCoins: coins,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COINS_LIST:
      return {
        ...state,
        listCoins: action.payload,
      };
    case SELECTED_COIN:
      return {
        ...state,
        currentCoin: action.payload,
      };
    case FETCH_COIN_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_COIN_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        price: action.payload,
      };
    case FETCH_CHART_DATA:
      return {
        ...state,
        isLoadingChart: true,
        currentRange: action.payload,
      };
    case FETCH_CHART_DATA_SUCCESS:
      return {
        ...state,
        isLoadingChart: false,
        chartPrices: action.payload,
      };
    default:
      return state;
  }
};
