import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TOP_APPBAR_HEIGHT = 115;

export default function TopBar() {
    const { top } = useSafeAreaInsets();
    return(
    <Appbar style={[styles.top, {height: TOP_APPBAR_HEIGHT}]}>
        <View style={[styles.profile]}>
            <Image source={require('../assets/profile_images/pfp.jpg')} style={[styles.profilePic]} />
        </View>
        <View style={[styles.twitter]}>
            <Appbar.Action size={30} color='#1C96E8' icon="twitter" onPress={() => {}} />
        </View>
        
        <View style={[styles.tabs]}>
            <Button textColor='white' style={[styles.tab]} onPress={() => console.log('Pressed')}>
                <Text>For you</Text>
            </Button>
            <Button textColor='white' style={[styles.tab]} onPress={() => console.log('Pressed')}>
                <Text style={{color: 'white'}}>
                Following
                </Text>
            </Button>
        </View>
        
    </Appbar>
    );
  
};

const styles = StyleSheet.create({
    twitter: {
       
    },
    profile: {
        position: 'absolute',
        left: 0
        
    },
    profilePic: {
        width: 36,
        height: 36,
        borderRadius: 50,
        marginLeft: 18
    },
    top: {
        backgroundColor: '#131F2C',
        borderBottomWidth: 1,
        borderBottomColor: '#425264',
        display: 'flex',
        justifyContent: 'center',
    },
    tabs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: '0%',
        width: '100%',
    },
    tab: {
        width: '50%',
        borderRadius: 0,
    },
    blueLine: {
        color: 'white',
        borderBottomColor: '#1E9AF0',
        borderBottomWidth: 2,
        
    }
  });
