import * as React from 'react';
import Tweet from '../components/Tweet';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Feed() {
    return(
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
    );
};

const styles = StyleSheet.create({
    feedEnd: {
        height: 120,
        paddingTop: 50,
        backgroundColor: '#151F2B',
    },
});