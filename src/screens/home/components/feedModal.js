import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../../constants';

import {
  selectedCoin,
  selectedRange,
  getPrice,
} from '../../../redux/actions/coinData';

class FeedModal extends Component {
  _onSelectedCoin(sym) {
    this.props.selectedCoin(sym);
    this.props.selectedRange(undefined, sym);
    this.props.getPrice(sym);
  }

  render() {
    const { id, name, sym } = this.props.item;
    return (
      <TouchableOpacity
        style={styles.root}
        onPress={() => this._onSelectedCoin(sym)}
      >
        <View style={styles.numberContainer}>
          <Text style={styles.nameText}>{`${id}.`}</Text>
        </View>
        <Text style={[styles.nameText, { paddingLeft: 5 }]}>{name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: colors.gray1,
  },
  numberContainer: {
    height: '100%',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    fontFamily: 'OpenSansLight',
  },
});

export default connect(
  null,
  { selectedCoin, getPrice, selectedRange },
)(FeedModal);
