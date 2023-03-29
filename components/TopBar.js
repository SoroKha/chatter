import * as React from 'react';
import { Appbar, Button, useTheme } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-web';

const TOP_APPBAR_HEIGHT = 100;

export default function TopBar() {
    const { top } = useSafeAreaInsets();
    return(
    <Appbar style={[styles.top, {height: TOP_APPBAR_HEIGHT + top}]} safeAreaInsets={{ top }}>
        <View style={[styles.profile]}>
            <Appbar.Action size={30} color='white' icon="account" onPress={() => {}} />
        </View>
        <View style={[styles.twitter]}>
            <Appbar.Action size={30} color='#1C96E8' icon="twitter" onPress={() => {}} />
        </View>
        
        <View style={[styles.tabs]}>
            <Button textColor='white' style={[styles.tab]} onPress={() => console.log('Pressed')}>
                <Text>For you</Text>
                <View></View>
            </Button>
            <Button textColor='white' style={[styles.tab]} onPress={() => console.log('Pressed')}>
                Following
            </Button>
        </View>
    </Appbar>
    );
  
};

const styles = StyleSheet.create({
    twitter: {
       position: 'absolute',

    },
    profile: {
        position: 'absolute',
        left: '5%',
        top: '45%'
        
    },
    top: {
        backgroundColor: '#131F2C',
        borderBottomWidth: '2px',
        borderBottomColor: '#425264',
        display: 'flex',
        justifyContent: 'center'
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
        borderRadius: '0',
        transition: 'none'
    },
  });
