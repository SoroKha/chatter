import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomBar from './components/BottomBar';
import Feed from './components/Feed';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <PaperProvider>
    <TopBar />
    <Feed />
    <BottomBar />
    </PaperProvider>
  );
}
