import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Appbar, Badge, TextInput } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 55;

export default function BottomBar() {
  const { bottom } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'column'}}>
    <View style={styles.replyBox}>
        <Image source={require('../../assets/profile_images/pfp.jpg')} style={styles.profilePic} />
        <TextInput style={styles.replyInput}></TextInput>
    </View>
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
      <Appbar.Action color='white' icon="home" onPress={() => {navigation.navigate('Feed')}} />
      <Appbar.Action color='white' icon="magnify" onPress={() => {}} />
      <Appbar.Action color='white' icon="microphone" onPress={() => {}} />
      <View>
        <Appbar.Action color='white' icon="bell" onPress={() => {}} />
        <Badge size={10} style={styles.notifBadge}></Badge>
      </View>
      
      <View>
        <Appbar.Action color='white' icon="mail" onPress={() => {}} style={styles.mail} />
        <Badge size={10} style={styles.mailBadge}></Badge>
      </View>
    </Appbar>
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    justifyContent: 'space-between',
    color: 'white',
  },
  mailBadge: {
    position: 'absolute',
    top: 14,
    right: 12,
    backgroundColor: '#1D9BF0'
  },
  notifBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    backgroundColor: '#1D9BF0'
  },
  replyBox: {
    borderTopColor: 'white',
    borderTopWidth: 0.5,
    height: 50,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  profilePic: {
    width: 36,
    height: 36,
    borderRadius: 50,
    marginLeft: 18,
    top: 6
  },
  replyInput: {
    width: '80%',
    height: 1,
    left: 15,
    borderRadius: 50
  }
});
