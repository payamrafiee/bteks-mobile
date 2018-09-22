import axios from 'axios';

import {
  FETCH_COIN_DATA,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_CHART_DATA,
  FETCH_CHART_DATA_SUCCESS,
  SELECTED_COIN,
} from '../types';

import { coins, buildAPIQuery } from '../helper';

export const selectedCoin = (sym = 'BTC') => async dispatch => {
  coins.find(coin => {
    if (coin.sym === sym) {
      return dispatch({
        type: SELECTED_COIN,
        payload: coin,
      });
    }
  });
};

export const getPrice = (sym = 'BTC') => async dispatch => {
  dispatch({ type: FETCH_COIN_DATA });
  try {
    const { data } = await axios.get(
      `https://min-api.cryptocompare.com/data/price?fsym=${sym}&tsyms=USD`,
    );
    return dispatch({
      type: FETCH_COIN_DATA_SUCCESS,
      payload: data.USD,
    });
  } catch (error) {
    throw error;
  }
};

export const selectedRange = (range, symbol) => async dispatch => {
  dispatch({ type: FETCH_CHART_DATA, payload: range });
  try {
    const newData = [];
    const { data } = await axios.get(buildAPIQuery(range, symbol));
    data.Data.forEach(item => {
      newData.push({ x: item.time, y: item.close });
    });
    return dispatch({
      type: FETCH_CHART_DATA_SUCCESS,
      payload: newData,
    });
  } catch (error) {
    throw error;
  }
};
