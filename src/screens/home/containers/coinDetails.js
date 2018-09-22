import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode';

import { Separator } from '../../../components'

import { colors } from '../../../constants';

class CoinDetails extends Component {
  state = {text: 'asdfs'};
  render() {
    const { currentCoin } = this.props;
    return (
      <View style={styles.root}>
        <View>
          <Text style={styles.text} numberOfLines={1}>
            {`Your ${currentCoin} address is:`}
          </Text>
          <Text
            style={[styles.text, { color: colors.gray1, fontSize: 15 }]}
            numberOfLines={1}
          >
            askjdfl239029473hjfh29398235029hadfadsfsdafdsfasdfasdfa
          </Text>
        </View>
        <Separator left={30} right={30} top={20} />
        <View style={styles.qrcode}>
          <View>
            <Text style={styles.textAmount}>
              {currentCoin}
            </Text>
            <Text style={[styles.textAmount, { fontSize: 26, color: colors.white, fontFamily: 'OpenSansLight'}]}>
              0.0
            </Text>
            <Text style={styles.textAmount}>
              USD$ 0.00
            </Text>
          </View>
          <QRCode
            value={this.state.text}
            size={120}
            bgColor={colors.purple}
            fgColor='white'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: colors.gray2,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2,
    fontFamily: 'OpenSansLight',

  },
  qrcode: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20
  },
  textAmount: {
    fontSize: 18,
    fontFamily: 'OpenSansRegular',
    color: colors.gray1,
  },
});

const mapStateToProps = state => ({
  currentCoin: state.coinData.currentCoin.sym,
});

export default connect(mapStateToProps)(CoinDetails);
