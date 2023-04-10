import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, Provider as PaperProvider, Text } from 'react-native-paper';
import Feed from './views/Feed';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TweetInfo from './views/TweetInfo';
import Landing from './views/Landing';

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
            name='TweetInfo'
            component={TweetInfo}
          />
          <Stack.Screen
            name='SignUp'
            component={Landing}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    );
};
