import { Provider as PaperProvider } from 'react-native-paper';
import BottomBar from './components/BottomBar';
import Feed from './views/Feed';
import TopBar from './components/TopBar';

export default function App() {
  return (
    <PaperProvider>
    <TopBar />
    <Feed />
    <BottomBar />
    </PaperProvider>
  );
};
