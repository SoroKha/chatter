import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/Feed/TopBar';
import BottomBar from '../components/BottomBar';
import Tweet from '../components/Feed/Tweet';
import NewTweet from '../components/Feed/NewTweet';
import TweetInfo from './TweetInfo';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-drawer-layout';
import DrawerContent from '../components/DrawerContent';


export default function Feed() {
    const [open, setOpen] = React.useState(false);

    return(
    <>
        <Drawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => {
            return <DrawerContent />;
        }}
        >
        <TopBar drawer={setOpen} />
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
      </Drawer>
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