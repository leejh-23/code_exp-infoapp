import {View, Text} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const EventsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Events!</Text>
  </View>
);

const Stack = createStackNavigator();

// specify that u want the eventsstack to contain an eventsscreen
const EventsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Events"
        component={EventsScreen}
      />
    </Stack.Navigator>
  );
};

// stacks come with a header by default
export default EventsStack;