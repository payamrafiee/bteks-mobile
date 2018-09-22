import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { selectedRange } from '../../../redux/actions/coinData';
import { colors } from '../../../constants';

class Ranges extends Component {
  render() {
    const { list, currentCoin, currentRange } = this.props;
    return (
      <View style={styles.root}>
        {list.map((range, index) => (
          <TouchableOpacity
            hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
            key={index}
            style={styles.rangeContainer}
            onPress={() => this.props.selectedRange(range, currentCoin.sym)}
          >
            <Text
              style={[
                styles.rangeText,
                currentRange === range ? { color: 'red' } : { color: 'white' },
              ]}
            >
              {range}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rangeContainer: {
    justifyContent: 'center',
  },
  rangeText: {
    fontSize: 13,
    fontFamily: 'OpenSansLight',
    color: colors.white,
  },
});

const mapStateToProps = state => ({
  list: state.coinData.listRanges,
  currentCoin: state.coinData.currentCoin,
  currentRange: state.coinData.currentRange,
});

export default connect(
  mapStateToProps,
  { selectedRange },
)(Ranges);
