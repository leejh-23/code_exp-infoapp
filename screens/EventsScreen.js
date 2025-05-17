import {View, Text, Pressable} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// when the pressable is pressed, run the function which runs the navigation.navigate function 
// to navigate to the eventssecond screen
// and since navigation is used in the eventsscreen, it needs to be passed as a parameter to the main function

const EventsScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Events!</Text>
    <Pressable onPress={() => navigation.navigate("EventsSecond")} style={{ backgroundColor: "white", padding: 10, marginTop: 20}}>
      <Text>Go to Events Second Screen</Text>
    </Pressable>
  </View>
);

const EventsSecondScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events Second Screen!</Text>
    </View>
  );
};

const Stack = createStackNavigator();

// specify that u want the eventsstack to contain an eventsscreen
const EventsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Events"
        component={EventsScreen}
      />
      <Stack.Screen 
        name="EventsSecond"
        component={EventsSecondScreen}
      />
    </Stack.Navigator>
  );
};

// stacks come with a header by default
export default EventsStack;