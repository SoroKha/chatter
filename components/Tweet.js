import * as React from 'react';
import { Button, IconButton, Portal } from 'react-native-paper';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Modal } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

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
    <View style={styles.tweetBox}>

    <TouchableWithoutFeedback onPress={() => {}}>
    <View style={styles.profilePicWrapper}>
        <TouchableOpacity onPress={() => {console.log('pfp')}}>
        <Image source={require('../assets/profile_images/pfp.jpg')} style={[styles.profilePic]} />
        </TouchableOpacity>
        </View>
    </TouchableWithoutFeedback>

    <View>
        <TouchableWithoutFeedback onPress={() => {}}>
        <View>
        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Text style={{ color: '#FFFFFF' }}>Soroush </Text> 
            <Text style={{ color: '#7C8896' }}>@SoroKha </Text>
            <Text style={{ color: '#7C8896' }}>12h</Text> 
            <Button style={styles.more} icon='dots-horizontal' textColor='gray' onPress={() => {}}/>
        </View>

        <Text style={styles.message}>
            Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text.
        </Text>
        <Image source={require('../assets/icon.png')} style={styles.image} />
        </View>
        </TouchableWithoutFeedback>
        <View style={styles.interactions}>
            <Button icon="chat" textColor='gray'>
                538
            </Button>
            <Button icon="recycle" textColor={retweet} onPress={clickRetweet}>
                9,715
            </Button>
            <Button icon="heart" textColor={heart} onPress={clickHeart}>
                116K
            </Button>
            <Button icon="graph" textColor='gray'>
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
        flexDirection: 'row',
        paddingRight: '10%',
        borderBottomWidth: 1,
        borderBottomColor: '#425264',
    },
    profilePicWrapper: {
        width: '20%',
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingRight: 15
    },
    profilePic: {
        width: 48,
        height: 48,
        borderRadius: 50,
    },
    more: {
        position: 'absolute',
        right: 0,
        borderRadius: 50
    },
    message: {
        color: 'white',
        marginBottom: 10,
        paddingRight: 26
    },
    image: {
        width: 320,
        height: 300,
        borderRadius: 15
    },
    interactions: {
        flexDirection: 'row',
    },
});
