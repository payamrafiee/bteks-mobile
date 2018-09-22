import React from 'react';
import { View } from 'react-native';

import { colors } from '../constants';

export const Separator  =  ({ left = 0, right = 0, top = 10, bottom = 10 }) =>  (
  <View>
    <View
      style={{
        borderColor: colors.gray2,
        borderWidth: 0.5,
        marginRight: right,
        marginLeft: left,
        marginBottom: bottom,
        marginTop: top
      }}
    />
  </View>
  )
