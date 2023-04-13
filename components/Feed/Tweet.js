import * as React from 'react';
import { Button, IconButton } from 'react-native-paper';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { timeSince } from '../../helper/Date';
import Icon from 'react-native-paper/src/components/Icon'


export default function Tweet(props) {
    const navigation = useNavigation();
    
    const [heart, setHeart] = React.useState('gray');
    const [retweet, setRetweet] = React.useState('gray');

    var date = timeSince(props.date);
    


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

    <TouchableWithoutFeedback onPress={() => {navigation.navigate('TweetInfo', {props})}}>
    <View style={styles.profilePicWrapper}>
        <TouchableOpacity onPress={() => {console.log('pfp')}}>
        <Image source={require('../../assets/profile_images/pfp.jpg')} style={[styles.profilePic]} />
        </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>

    <View>
        <TouchableWithoutFeedback onPress={() => {navigation.navigate('TweetInfo', {props})}}>
        <View>
        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <Text style={{ color: '#FFFFFF' }}>Soroush </Text> 
            <Text style={{ color: '#7C8896' }}>@SoroKha </Text>
            <Text style={{ color: '#7C8896' }}>{date}</Text> 
            <Button style={styles.more} icon='dots-horizontal' textColor='gray' onPress={() => {}}/>
        </View>

        <Text style={styles.message}>
            {props.text}
        </Text>
        <Image source={require('../../assets/profile_images/pfp.jpg')} style={styles.image} />
        </View>
        </TouchableWithoutFeedback>
        <View style={styles.interactions}>
           
            <Button icon='chat-outline' textColor='gray' labelStyle={{fontSize: 15}} style={styles.intButton}>
                <Text style={{fontSize: 13}}>538</Text>
            </Button>
            <Button icon='repeat-variant' textColor={retweet} labelStyle={{fontSize: 18}} onPress={clickRetweet} style={styles.intButton}>
                <Text style={{fontSize: 13}}>9,715</Text>
            </Button>
            <Button icon='heart-outline' textColor={heart} labelStyle={{fontSize: 15}} onPress={clickHeart} style={styles.intButton}>
                <Text style={{fontSize: 13}}>116K</Text>
            </Button>
            <Button icon='poll' textColor='gray' labelStyle={{fontSize: 15}} style={styles.intButton}>
                <Text style={{fontSize: 13}}>{props.views}</Text>
            </Button>
            <Button icon='upload' textColor='gray' labelStyle={{fontSize: 15}} style={styles.intButtonUpload} />
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
    intContent: {
        flexDirection: 'row'
    },
    intButton: {
        marginLeft: -10,
        
    },
    intButtonUpload: {
        marginLeft: 10
    }
});
