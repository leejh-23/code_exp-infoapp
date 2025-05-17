import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Import local screens
import HomeScreen from './screens/HomeScreen';
import EventsStack from './screens/EventsScreen';
import ContactScreen from './screens/ContactScreen';

// Navigator -----------------------------------------------
const Tabs = createBottomTabNavigator({
  screens: { // associates the tabs with its relevant screen pages
    Home: HomeScreen,
    Events: {
      screen: EventsStack,
      options: { headerShown: false } // to get rid of the double headers bc it looks a little funny
    },
    Contact: ContactScreen,
  },
  screenOptions: ({ route }) => ({
    tabBarActiveTintColor: "red",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Home") {
        iconName = "home";
      } else if (route.name === "Events") {
        iconName = focused ? "calendar":"calendar-o";
      } else { // if focused, show the filled address-book icon, else show the non-filled icon (? is just a shorthand for if statements)
        iconName = focused ? "address-book": "address-book-o";
      }

      return <FontAwesome name={iconName} size={size} color={color} />;
    }
  })
});

// Root navigation component -------------------------------
const Navigation = createStaticNavigation(Tabs); // creates the navigation bar with the specified tabs 

export default function App() {
  return <Navigation />;
}