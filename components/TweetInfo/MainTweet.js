import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { timeFormat } from '../../helper/Date';

export default function MainTweet(props) {
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
    const mainTweet = props.props;
    const date = timeFormat(mainTweet.date, 'mainTweetInfo').formattedDate
    const time = timeFormat(mainTweet.date, 'mainTweetInfo').formattedTime

    return(
        <View style={{borderBottomColor: 'white', borderBottomWidth: 0.5}}>
        <View style={{flexDirection: 'row'}}>
        <View style={styles.profilePicWrapper}>
            <TouchableOpacity onPress={() => {console.log('pfp')}}>
                <Image source={require('../../assets/profile_images/pfp.jpg')} style={styles.profilePic} />
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'column', left: 10 }}>
            <Text style={{ color: '#FFFFFF' }}>Soroush </Text> 
            <Text style={{ color: '#7C8896' }}>@SoroKha</Text>
        </View>
        </View>

        <View style={styles.content}>
            <Text style={styles.message}>
            { mainTweet.text }
            </Text>
            <Image source={require('../../assets/profile_images/pfp.jpg')} style={styles.image} />
            <View style={styles.stats}>
                <View style={styles.statsLine}>
                    <Text style={styles.statsGrey}>{ time } • { date } • </Text>
                    <Text style={styles.statsBold}>{ mainTweet.views } </Text>
                    <Text style={styles.statsGrey}>Views</Text>
                </View>
                <View style={styles.statsLine}>
                    <Text style={styles.statsBold}>252 </Text>
                    <Text style={styles.statsGrey}>Retweets </Text>
                    <Text style={styles.statsBold}>11 </Text>
                    <Text style={styles.statsGrey}>Quotes</Text>
                </View>
                <View style={styles.statsLine}>
                    <Text style={styles.statsBold}>1,984 </Text>
                    <Text style={styles.statsGrey}>Likes </Text>
                    <Text style={styles.statsBold}>12 </Text>
                    <Text style={styles.statsGrey}>Bookmarks</Text>
                </View>
            </View>
            <View style={styles.interactions}>
                <Button icon='chat-outline' textColor='gray' />
                <Button icon='repeat-variant' textColor={retweet} onPress={clickRetweet} />
                <Button icon='heart-outline' textColor={heart} onPress={clickHeart} />
                <Button icon="bookmark" textColor='gray' />
                <Button icon="upload" textColor='gray' />
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    mainTweet: {
        marginTop: 50,
        flexDirection: 'column',
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
        marginTop: 20,
        paddingBottom: 5
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
        justifyContent: 'center',
        right: 15
    },
    stats: {
        color: 'white',
        marginTop: 30,
        width: 375
    },
    statsLine: {
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 0.2,
        paddingBottom: 10,
        marginBottom: 10
    },
    statsGrey: {
        color: 'grey'
    },
    statsBold: {
        color: 'white',
        fontWeight: 'bold'
    }
});