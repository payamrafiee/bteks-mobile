import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { EvilIcons } from '@expo/vector-icons';

import FeedModal from './feedModal';

class ModalScreen extends Component {
  _renderItem = item => <FeedModal item={{ ...item }} />;

  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={this.props.onClose}
          hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
          <View>
            <EvilIcons name="close" size={25} />
          </View>
        </TouchableOpacity>
        <FlatList
          data={this.props.list}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this._renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 440,
    width: '95%',
    backgroundColor: 'rgba(190, 188, 196, 0.65)',
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonClose: {
    marginTop: 10,
    marginBottom: 20,
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  closeText: {
    fontSize: 18,
    fontFamily: 'OpenSansLight',
  },
});

const mapStateToProps = state => ({
  list: state.coinData.listCoins,
});
export default connect(mapStateToProps)(ModalScreen);
