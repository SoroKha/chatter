import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function TweetExpand() {
    const navigation = useNavigation();
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
    <View style={styles.main}>
        <View style={styles.header}>
            <IconButton 
                icon='arrow-left'
                iconColor='white'
                onPress={() => {navigation.goBack()}}
            />
            <Text style={styles.tweetTxt}>Tweet</Text> 
        </View>
        <View style={styles.mainTweet}>
            <View style={{flexDirection: 'row'}}>
            <View style={styles.profilePicWrapper}>
                <TouchableOpacity onPress={() => {console.log('pfp')}}>
                    <Image source={require('../assets/profile_images/pfp.jpg')} style={[styles.profilePic]} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'column', left: 10 }}>
                <Text style={{ color: '#FFFFFF' }}>Soroush </Text> 
                <Text style={{ color: '#7C8896' }}>@SoroKha</Text>
            </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.message}>
                Example text. Example text. Example text. Example text. Example text. Example text. Example text. Example text.
                </Text>
                <Image source={require('../assets/icon.png')} style={styles.image} />
                <View style={styles.interactions}>
                    <Button icon="chat" textColor='gray' />
                    <Button icon="recycle" textColor={retweet} onPress={clickRetweet} />
                    <Button icon="heart" textColor={heart} onPress={clickHeart} />
                    <Button icon="bookmark" textColor='gray' />
                    <Button icon="upload" textColor='gray' />
                </View>
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#151F2B',
        height: '100%'
    },
    header: { 
        borderBottomWidth: 1,
        borderBottomColor: '#425264',
        top: 30,
        flexDirection: 'row'
        
    },
    tweetTxt: {
        position: 'absolute',
        top: 10,
        left: '45%',
        color: 'white',
        fontSize: 17
    },
    mainTweet: {
        top: 50,
        flexDirection: 'column'
    },
    profilePicWrapper: {
        width: 65,
        alignItems: 'flex-end',
        
    },
    profilePic: {
        width: 48,
        height: 48,
        borderRadius: 50,
    },
    content: {
        left: 20,
        top: 20
    },
    message: {
        color: 'white',
        marginBottom: 10,
        paddingRight: 26
    },
    image: {
        width: 375,
        height: 300,
        borderRadius: 15
    },
    interactions: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
});
