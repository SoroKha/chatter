import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { StyleSheet, View, Text, Image } from 'react-native';

const TOP_APPBAR_HEIGHT = 135;

export default function TopBar() {
    return(
    <Appbar style={[styles.top, {height: TOP_APPBAR_HEIGHT}]}>
        <Image source={require('../assets/profile_images/pfp.jpg')} style={styles.profilePic} />
        <Appbar.Action size={30} color='#1C96E8' icon="twitter" onPress={() => {}} />

        <View style={styles.tabs}>
            <Button textColor='white' style={styles.tab} onPress={() => console.log('Pressed')}>
                <Text>For you</Text>
            </Button>
            <Button textColor='white' style={styles.tab} onPress={() => console.log('Pressed')}>
                <Text>Following</Text>
            </Button>
        </View>    
    </Appbar>
    );
};

const styles = StyleSheet.create({
    profilePic: {
        position: 'absolute',
        left: 0,
        width: 36,
        height: 36,
        borderRadius: 50,
        marginLeft: 18
    },
    top: {
        backgroundColor: '#131F2C',
        borderBottomWidth: 1,
        borderBottomColor: '#425264',
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
        width: '51%',
        borderRadius: 0,
    },
});
