import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Badge } from 'react-native-paper';
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
          backgroundColor: '#151F2B',
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action color='white' icon="home" onPress={() => {}} />
      <Appbar.Action color='white' icon="magnify" onPress={() => {}} />
      <Appbar.Action color='white' icon="microphone" onPress={() => {}} />
      <Appbar.Action color='white' icon="bell" onPress={() => {}} />
      <View>
        <Appbar.Action color='white' icon="mail" onPress={() => {}} style={styles.mail} />
        <Badge size={10} style={styles.badge}></Badge>
      </View>
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    justifyContent: 'space-between',
    color: 'white',
    borderTopWidth: 1,
    borderTopColor: '#425264',
  },
  mail: {
    
  },
  badge: {
    position: 'absolute',
    top: 14,
    right: 12,
    backgroundColor: '#1D9BF0'
  }
});
