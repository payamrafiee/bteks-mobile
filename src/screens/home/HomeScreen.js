import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import { getPrice } from '../../redux/actions/coinData';

import ModalScreen from './components/modal';
import Chart from './containers/chart';
import Ranges from './containers/ranges';
import CoinDetails from './containers/coinDetails';
import ButtonHeader from '../../components/ButtonHeader';

import { colors } from '../../constants';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <ButtonHeader
        side="right"
        onPress={navigation.getParam('showCoinsModal')}
      >
        <Entypo name="circle-with-plus" size={30} color={colors.white} />
      </ButtonHeader>
    ),
  });

  state = {
    isModalVisible: false,
  };
  componentDidMount() {
    this.props.navigation.setParams({ showCoinsModal: this._showCoinsModal });
  }

  _showCoinsModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  _closeModal = () => this.setState({ isModalVisible: false });

  render() {
    const { isLoading } = this.props;
    return (
      <View style={styles.root}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isLoading} // show activity indicator while updating prices
              onRefresh={getPrice} // update prices when list pulled
              tintColor="#FFFFFF"
            />
          }
        >
          <Modal isVisible={this.state.isModalVisible}>
            <ModalScreen onClose={this._closeModal} />
          </Modal>
          <Chart />
          <Ranges />
          <CoinDetails />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.purple,
  },
});

const mapStateToProps = state => ({
  isLoading: state.coinData.isLoading,
});

export default connect(
  mapStateToProps,
  { getPrice },
)(HomeScreen);
