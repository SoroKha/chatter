import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 55;

export default function BottomBar() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: '#15202B',
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action color='white' icon="home" onPress={() => {}} />
      <Appbar.Action color='white' icon="magnify" onPress={() => {}} />
      <Appbar.Action color='white' icon="microphone" onPress={() => {}} />
      <Appbar.Action color='white' icon="bell" onPress={() => {}} />
      <Appbar.Action color='white' icon="mail" onPress={() => {}} />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    color: 'white'
  },
});
