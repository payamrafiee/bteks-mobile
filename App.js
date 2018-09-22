import React from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux'

import store from './src/redux/store';
import CreateRootNavigator from './src/screens/AppNavigator';
import { fontAssets } from './src/helpers/cachedFonts';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <CreateRootNavigator />
      </Provider>
    );
  }
}
