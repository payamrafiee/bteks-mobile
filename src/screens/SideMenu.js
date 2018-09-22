import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';

import { colors } from '../constants';

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={[styles.text, { paddingLeft: 0 }]}>Payam Rafiee</Text>
        </View>
        <View>
          <View style={styles.fundContainer}>
            <Text style={styles.text}>
              Total Funding:
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 26, color: colors.white, fontFamily: 'OpenSansLight' },
              ]}
            >
              $00.0
            </Text>
          </View>
          <TouchableOpacity style={styles.pageContainer}>
            <Entypo name="home" size={18} color={colors.gray1} />
            <Text style={[styles.text, { fontSize: 17 }]}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageContainer}>
            <Ionicons name="md-settings" size={18} color={colors.gray1} />
            <Text style={[styles.text, { fontSize: 17 }]}>
              Setting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.purple2,
  },
  header: {
    marginTop: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fundContainer: {
    marginTop: 20,
    marginBottom: 40,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'OpenSansRegular',
    color: colors.gray1,
    paddingLeft: 10
  },
  pageContainer: {
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
});

export default SideMenu;
