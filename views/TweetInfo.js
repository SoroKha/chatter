import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MainTweet from '../components/TweetInfo/MainTweet';
import TweetReply from '../components/TweetInfo/TweetReply';
import BottomBar from '../components/TweetInfo/BottomBar';


export default function TweetInfo({route}) {
    const navigation = useNavigation();
    const tweetProps = route.params.props;
    

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
        <ScrollView style={styles.mainTweet}>
            <MainTweet props={tweetProps} />
            <TweetReply />
            <TweetReply />
            <TweetReply />
            <View style={styles.feedEnd}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                    You've reached the end!
                </Text>
            </View>
        </ScrollView>
        <BottomBar />
    </View>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#151F2B',
        height: '100%'
    },
    header: { 
        top: 30,
        flexDirection: 'row',
        
    },
    tweetTxt: {
        position: 'absolute',
        top: 10,
        left: '45%',
        color: 'white',
        fontSize: 17
    },
    mainTweet: {
        top: 30,
        flexDirection: 'column',
    },
    feedEnd: {
        height: 120,
        marginTop: 200,
        backgroundColor: '#151F2B',
    },
});
