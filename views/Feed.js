import * as React from 'react';
import Tweet from '../components/Tweet';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Feed() {
    return(
    <View>
        <ScrollView>
            <Tweet />
            <Tweet />
            <View style={[styles.feedEnd]}>
                <Text style={{textAlign: 'center', color: 'white'}}>You've reached the end!</Text>
            </View>
        </ScrollView>
        
    </View>
    );
  
};

const styles = StyleSheet.create({
    newTweet: {
        position: 'absolute',
        alignSelf:'flex-end',
        right: 0,
        top: 50,
        width: 10,
        backgroundColor: '#1D9BF0'
    },
    feedEnd: {
        height: 300,
        paddingTop: 50,
        backgroundColor: '#151F2B',
    }
});