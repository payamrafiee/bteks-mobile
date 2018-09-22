export const coins = [
  { id: '1', name: 'Bitcoin', sym: 'BTC' },
  { id: '2', name: 'Ethereum', sym: 'ETH' },
  { id: '3', name: 'XRP', sym: 'XRP' },
  { id: '4', name: 'Bitcoin Cash', sym: 'BCH' },
  { id: '5', name: 'EOS', sym: 'EOS' },
  { id: '6', name: 'Stellar', sym: 'XLM' },
  { id: '7', name: 'Litecoin', sym: 'LTC' },
  { id: '8', name: 'Cardano', sym: 'ADA' },
  { id: '9', name: 'IOTA', sym: 'MIOTA' },
  { id: '10', name: 'Tether', sym: 'USDT' },
];

export const ranges = ['1H', '1D', '1W', '1M', '1Y'];

export const buildAPIQuery = (range = '1D', symbol = 'BTC') => {
  let aggregate = 6;
  let limit;
  let endpoint;

  switch (range) {
    case '1H':
      endpoint = 'histominute';
      aggregate = 1;
      limit = 60;
      break;
    case '1D':
      endpoint = 'histominute';
      aggregate = 6;
      limit = 240;
      break;
    case '1W':
      endpoint = 'histohour';
      aggregate = 1;
      limit = 168;
      break;
    case '1M':
      endpoint = 'histohour';
      aggregate = 4;
      limit = 168;
      break;
    case '1Y':
      endpoint = 'histoday';
      aggregate = 1;
      limit = 365;
      break;
    default:
  }

  return `https://min-api.cryptocompare.com/data/${endpoint}?fsym=${symbol}&tsym=USD&aggregate=${aggregate}&limit=${limit}&e=CCCAGG`;
};
