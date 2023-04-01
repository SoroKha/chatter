import 'react-native-gesture-handler';
import { FAB, Provider as PaperProvider } from 'react-native-paper';
import BottomBar from './components/BottomBar';
import Feed from './views/Feed';
import TopBar from './components/TopBar';
import { StyleSheet } from 'react-native';
import NewTweet from './components/NewTweet';
import { NavigationContainer } from '@react-navigation/native';
import Sidebar from './components/Sidebar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TweetExpand from './components/TweetExpand';

const Stack = createNativeStackNavigator();

export default function App() {
    return(
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen
            name='Feed'
            component={Feed}
          />
          <Stack.Screen
            name='TweetExpand'
            component={TweetExpand}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
