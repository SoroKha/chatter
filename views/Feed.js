import * as React from 'react';
import Tweet from '../components/Tweet';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import NewTweet from '../components/NewTweet';
import BottomBar from '../components/BottomBar';

export default function Feed() {
    return(
    <>
        <TopBar />
        <ScrollView>
            <Tweet />
            <Tweet />
            <Tweet />
            <View style={styles.feedEnd}>
                <Text style={{textAlign: 'center', color: 'white'}}>
                    You've reached the end!
                </Text>
            </View>
        </ScrollView>
        <NewTweet />
        <BottomBar />
    </>
    );
};

const styles = StyleSheet.create({
    feedEnd: {
        height: 120,
        paddingTop: 50,
        backgroundColor: '#151F2B',
    },
});