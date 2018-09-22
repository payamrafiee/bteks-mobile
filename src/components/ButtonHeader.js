import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';

export default function ButtonHeader({ side, children, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={{
        marginBottom: Platform.OS === 'ios' ? 15 : 0,
        marginRight: side === 'right' ? 15 : 0,
        marginLeft: side === 'left' ? 15 : 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      side={side}
      onPress={onPress}
      disabled={disabled}
      hitSlop={{ top: 15, right: 15, left: 15, bottom: 15 }}
    >
      {children}
    </TouchableOpacity>
  );
}
