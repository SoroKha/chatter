import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'react-native';

export default function Tweet() {
    const [heart, setHeart] = React.useState('gray');
    const [retweet, setRetweet] = React.useState('gray');

    function clickHeart() {
        if (heart === 'gray') setHeart('#F91880');
        if (heart === '#F91880') setHeart('gray');
    }

    function clickRetweet() {
        if (retweet === 'gray') setRetweet('#00BA7C');
        if (retweet === '#00BA7C') setRetweet('gray');
    }

    return(
    <View style={[styles.tweetBox]}>
        <View style={[styles.profilePicWrapper]}>
            <Image source={require('../assets/profile_images/pfp.jpg')} style={[styles.profilePic]} />
        </View>
        <View style={[styles.bulk]}>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                <Text style={{ color: '#FFFFFF' }}>Soroush </Text> 
                <Text style={{color: '#7C8896'}}>@SoroKha </Text>
                <Text style={{color: '#7C8896'}}>12h</Text> 
                <Button style={[styles.more]} icon='dots-horizontal' textColor='gray' />
            </View>
            
            <View style={[styles.content]}>
                <Text style={styles.message}>
                    Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text.
                </Text>
                <Image source={require('../assets/icon.png')} style={[styles.image]} />
            </View>
            
            <View style={[styles.interactions]}>
                <Button icon="chat" textColor='gray' style={[styles.interactions]}>
                    538
                </Button>
                <Button icon="recycle" textColor={retweet} style={[styles.interactions]} onPress={clickRetweet}>
                    9,715
                </Button>
                <Button icon="heart" textColor={heart} style={[styles.interactions]} onPress={clickHeart}>
                    116K
                </Button>
                <Button icon="graph" textColor='gray' style={[styles.interactions]}>
                    11.6M
                </Button>
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
        paddingRight: '10%',
        marginBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#425264',
    },
    profilePicWrapper: {
        width: '20%',
        alignItems: 'center',
        paddingTop: 15
    },
    profilePic: {
        width: 48,
        height: 48,
        borderRadius: 50,
        alignItems: 'center',
    },
    more: {
        position: 'absolute',
        right: '0%',
    },
    message: {
        color: 'white',
        paddingBottom: 10,
        paddingRight: 26
    },
    image: {
        width: 310,
        height: 300,
        borderRadius: 15
    },
    interactions: {
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },


  });
