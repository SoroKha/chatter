import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import Feed from './views/Feed';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TweetExpand from './components/TweetExpand';

const Stack = createNativeStackNavigator();

export default function App() {
    return(
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Feed'
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
