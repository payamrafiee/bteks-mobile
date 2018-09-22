import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { VictoryLine } from 'victory-native';
import { connect } from 'react-redux';

import {
  getPrice,
  selectedRange,
  selectedCoin,
} from '../../../redux/actions/coinData';
import { colors } from '../../../constants';

class Chart extends Component {
  state = {};

  componentDidMount() {
    this.props.selectedCoin();
    this.props.getPrice();
    this.props.selectedRange();
  }

  render() {
    const { chartPrices, price, isLoadingChart, currentCoin } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.sym}>
          <Text style={styles.symText}>{currentCoin.sym}</Text>
        </View>
        <Text style={[styles.nameText, { color: colors.gray1 }]}>
          {currentCoin.name}
        </Text>
        <View style={[styles.sym, { marginTop: 5 }]}>
          <Text style={styles.symText}>{price}</Text>
        </View>
        <Text style={[styles.nameText, { color: colors.gray1 }]}>-1.3%</Text>
        <View style={styles.chart}>
          {isLoadingChart ? (
            <ActivityIndicator size="large" />
          ) : (
            <VictoryLine
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              height={270}
              width={470}
              style={{
                data: { stroke: colors.red },
              }}
              data={chartPrices}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.purple,
  },
  sym: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  symText: {
    fontSize: 30,
    fontFamily: 'OpenSansLight',
    color: 'white',
  },
  nameText: {
    fontSize: 20,
    fontFamily: 'OpenSansLight',
    color: colors.red,
    alignSelf: 'center',
  },
  chart: {
    height: 270,
    width: '100%',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  const { price, chartPrices, isLoadingChart, currentCoin } = state.coinData;
  return {
    price,
    chartPrices,
    isLoadingChart,
    currentCoin,
  };
};

export default connect(
  mapStateToProps,
  { selectedCoin, getPrice, selectedRange },
)(Chart);
