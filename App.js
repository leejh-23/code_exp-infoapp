import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import local screens
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import ContactScreen from './screens/ContactScreen';

// Navigator -----------------------------------------------
const Tabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Events: EventsScreen,
    Contact: ContactScreen,
  },
});

// Root navigation component -------------------------------
const Navigation = createStaticNavigation(Tabs);

export default function App() {
  return <Navigation />;
}