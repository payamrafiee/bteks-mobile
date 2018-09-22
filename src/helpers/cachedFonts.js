import { Font } from 'expo';

const cachedFonts = fonts => fonts.map(font => Font.loadAsync(font));

export const fontAssets = cachedFonts([
  {
    AvenirBook: require('../../assets/fonts/AvenirLTStd-Book.otf'),
  },
  {
    AvenirLight: require('../../assets/fonts/AvenirLTStd-Light.otf'),
  },
  {
    AvenirRoman: require('../../assets/fonts/AvenirLTStd-Roman.otf'),
  },
  {
    SolomonLight: require('../../assets/fonts/Solomon-light.ttf'),
  },
  {
    SolomonThin: require('../../assets/fonts/Solomon-thin.ttf'),
  },
  {
    SolomonBold: require('../../assets/fonts/Solomon-bold.ttf'),
  },
  {
    SolomonBlack: require('../../assets/fonts/Solomon-black.ttf'),
  },
  {
    OpenSansLight: require('../../assets/fonts/OpenSans-Light.ttf'),
  },
  {
    OpenSansRegular: require('../../assets/fonts/OpenSans-Regular.ttf'),
  },
  {
    OpenSansSemibold: require('../../assets/fonts/OpenSans-Semibold.ttf'),
  },
]);
