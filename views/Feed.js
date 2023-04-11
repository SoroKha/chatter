import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TopBar from '../components/Feed/TopBar';
import BottomBar from '../components/BottomBar';
import Tweet from '../components/Feed/Tweet';
import NewTweet from '../components/Feed/NewTweet';
import { Drawer } from 'react-native-drawer-layout';
import DrawerContent from '../components/DrawerContent';
import { SERVER } from '@env';

export default function Feed() {
    const [open, setOpen] = React.useState(false);

    const [tweetList, setTweetList] = React.useState([]);

    function getAllTweets() {
        fetch(SERVER + "/getAllTweets", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
        })
          .then((res) => { return res.json() })
          .then((data) => setTweetList(data))
          .catch(function(error) {
            alert(error);
            throw error;
          });
    }

    React.useEffect(() => {
        getAllTweets();
        }, []);

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
            {tweetList.map((tweet) =>
                <Tweet
                key={tweet.id}
                date={tweet.date}
                id={tweet.id}
                media={tweet.media}
                views={tweet.views}
                text={tweet.text}
                userId={tweet.userId}
                />
            )}
            
            
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