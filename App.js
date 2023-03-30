import { FAB, Provider as PaperProvider } from 'react-native-paper';
import BottomBar from './components/BottomBar';
import Feed from './views/Feed';
import TopBar from './components/TopBar';
import { StyleSheet } from 'react-native';

export default function App() {
    return(
    <PaperProvider>
    <TopBar />
    <Feed />
    <FAB
      icon="plus"
      style={styles.newTweet}
      onPress={() => console.log('Pressed')}
      variant='white'
    />
    <BottomBar />
    </PaperProvider>
    );
};

const styles = StyleSheet.create({
  newTweet: {
      position: 'absolute',
      right: 10,
      bottom: 65,
      backgroundColor: '#1D9BF0',
      borderRadius: 50,
      textcolor: 'white'
  },
});
