import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';

const TOP_APPBAR_HEIGHT = 135;
export default function TopBar({ drawer }) {

    return(
    <Appbar style={[styles.top, {height: TOP_APPBAR_HEIGHT}]}>
        <TouchableOpacity onPress={() => drawer(true)} style={styles.profilePicWrapper}>
            <Image source={require('../../assets/profile_images/pfp.jpg')} style={styles.profilePic} />
        </TouchableOpacity>

        
        
        <TouchableOpacity>
        <Image source={require('../../assets/logo.png')} style={styles.logo}/>
        </TouchableOpacity>
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
    profilePicWrapper: {
        position: 'absolute',
        left: 0,
    },
    logo: {
        width: 32,
        height: 32,
        borderRadius: 50,
        
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
});
