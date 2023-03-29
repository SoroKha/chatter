import * as React from 'react';
import { Appbar, Button, useTheme } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'react-native';

export default function Tweet() {
    return(
    <View style={[styles.tweetBox]}>
        <View style={[styles.profilePic]}>
            <Appbar.Action size={30} color='white' icon="account" onPress={() => {}} />
        </View>
        <View style={[styles.bulk]}>
            <View style={{ flexDirection: 'row', backgroundColor: 'green'}}>
                <Text style={[styles.userName]}>username</Text> 
                <Text style={[styles.userTag]}>@usertag</Text>
                <Text style={[styles.time]}>12h</Text> 
                <Button style={[styles.more]} icon='dots-horizontal' textColor='gray'></Button>
            </View>
            
            <View style={[styles.content]}>
                <Text style={styles.message}>
                    Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text.
                    Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text.
                    Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text.
                </Text>
            </View>
            <Image source={require('../assets/icon.png')} style={[styles.image]} />
            <View style={[styles.interactions]}>
                <Text style={[styles.interactions]}>Hello</Text>
                <Text style={[styles.interactions]}>Hello</Text>
                <Text style={[styles.interactions]}>Hello</Text>
            </View>
        </View>
        
    </View>
    );
  
};

const styles = StyleSheet.create({
    tweetBox: {
        backgroundColor: '#151F2B',
        display: 'flex',
        flexDirection: 'row',
        paddingRight: '10%'
    },
    profilePic: {
        backgroundColor: 'red',
        width: '20%',
        alignItems: 'center'
    },
    userName: {
        color: '#FFFFFF'
    },
    userTag: {
        color: '#7C8896'
    },
    time: {
        color: '#7C8896'
    },
    more: {
        position: 'absolute',
        right: '0%',
        top: '-45%'
    },
    content: {
        
    },
    message: {
        color: 'orange',
        paddingBottom: '5%'
    },
    bulk: {
        width: '91.1%',
        paddingLeft: '1.1%'
    },
    image: {
        width: '70%',
        height: '50%',
        borderRadius: '15%'
    },
    interactions: {
        color: 'white',
        display: 'flex',
        flexDirection: 'row'
    }


  });
